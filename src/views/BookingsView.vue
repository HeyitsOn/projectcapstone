<template>
    <div>
      <h1>Wedding Booking Page</h1>
      <form @submit.prevent="submitBooking">
        <label for="customerName">Customer Name:</label>
        <input type="text" v-model="newBooking.customer_name" required>
  
        <label for="customerEmail">Customer Email:</label>
        <input type="email" v-model="newBooking.customer_email" required>
  
        <label for="eventDate">Event Date:</label>
        <input type="date" v-model="newBooking.event_date" required>
  
        <label for="eventType">Event Type:</label>
        <input type="text" v-model="newBooking.event_type" required>
  
        <label for="guestCount">Guest Count:</label>
        <input type="number" v-model="newBooking.guest_count" required>
  
        <button type="submit">Book Now</button>
      </form>
  
      <h2>Existing Bookings</h2>
      <ul>
        <li v-for="booking in bookings" :key="booking.booking_id">
          <div>
            <strong>Customer Name:</strong> {{ booking.customer_name }}
          </div>
          <div>
            <strong>Event Date:</strong> {{ booking.event_date }}
          </div>
          <div>
            <strong>Event Type:</strong> {{ booking.event_type }}
          </div>
          <div>
            <strong>Guest Count:</strong> {{ booking.guest_count }}
          </div>
          <button @click="deleteBooking(booking.booking_id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newBooking: {
          customer_name: '',
          customer_email: '',
          event_date: '',
          event_type: '',
          guest_count: 0
        },
        bookings: []
      };
    },
    mounted() {
      this.fetchBookings();
    },
    methods: {
      async fetchBookings() {
        try {
          const response = await fetch('/api/bookings');
          if (!response.ok) {
            throw new Error('Failed to fetch bookings');
          }
          const data = await response.json();
          this.bookings = data.results;
        } catch (error) {
          console.error('Error fetching bookings:', error);
        }
      },
      async submitBooking() {
        try {
          const response = await fetch('/api/bookings/addBooking', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.newBooking)
          });
          if (!response.ok) {
            throw new Error('Failed to add booking');
          }
          const data = await response.json();
          this.bookings.push(data);
          this.newBooking = {
            customer_name: '',
            customer_email: '',
            event_date: '',
            event_type: '',
            guest_count: 0
          };
        } catch (error) {
          console.error('Error submitting booking:', error);
        }
      },
      async deleteBooking(bookingId) {
        try {
          const response = await fetch(`/api/bookings/delete/${bookingId}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            throw new Error('Failed to delete booking');
          }
          this.bookings = this.bookings.filter(booking => booking.booking_id !== bookingId);
        } catch (error) {
          console.error('Error deleting booking:', error);
        }
      }
    }
  };
  </script>
  
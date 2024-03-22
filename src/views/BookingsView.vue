<template>
  <div class="container">
<div class="col-2  mx-3">
        <button class=" btn btn-dark" data-bs-toggle="modal" data-bs-target="#Addbooking"> Add a booking</button>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Booking</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="customerName" class="form-label">Customer Name</label>
            <input type="text" class="form-control" id="customerName" placeholder="Enter customer name">
          </div>
          <div class="mb-3">
            <label for="customerEmail" class="form-label">Customer Email</label>
            <input type="email" class="form-control" id="customerEmail" placeholder="Enter customer email">
          </div>
          <div class="mb-3">
            <label for="eventDate" class="form-label">Event Date</label>
            <input type="date" class="form-control" id="eventDate">
          </div>
          <div class="mb-3">
            <label for="eventType" class="form-label">Event Type</label>
            <input type="text" class="form-control" id="eventType" placeholder="Enter event type">
          </div>
          <div class="mb-3">
            <label for="guestCount" class="form-label">Guest Count</label>
            <input type="number" class="form-control" id="guestCount" placeholder="Enter guest count">
          </div>
          <div class="mb-3">
            <label for="bookingDate" class="form-label">Booking Date</label>
            <input type="date" class="form-control" id="bookingDate">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add Booking</button>
      </div>
    </div>
  </div>
</div>
    <div class="row">
      <div class="card">
        <div class="card-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>booking_id</th>
                <th>Customer Name</th>
                <th>Customer_email</th>
                <th>Event_Date</th>
                <th>Event_Type</th>
                <th>Guest_Count</th>
                <th>booking_date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="booking in bookings" :key="booking.booking_id">
                <td>{{ booking.booking_id }}</td>
                <td>{{ booking.customer_name }}</td>
                <td>{{ booking.customer_email}}</td>
                <td>{{ booking.event_date }}</td>
                <td>{{ booking.event_type }}</td>
                <td>{{ booking.guest_count }}</td>
                <td>{{ booking.booking_date }}</td>
                <td class="d-flex justify-content-between">
                  <button class="btn btn-danger" @click="deleteWeddingBooking(booking.booking_id)">Delete</button>
                  <button class="btn btn-danger" @click="editBooking(booking.booking_id)">edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'BookingsView',
  data() {
    return {
      showWeddingBookings: true,
      showModal: false,
      CreateBooking:{
        booking_id: '',
        customer_name:'',
        Customer_email: '',
        event_date: '',
        event_type: '',
        guest_count: 0,
        booking_date:''
      }
    };
  },
  computed: {
    bookings() { 
      return this.$store.state.bookings;
    }
  },
  methods: {
    async deleteWeddingBooking(bookingId) {
      try {
        await this.$store.dispatch('deleteBooking', bookingId);
      } catch (error) {
        console.error("Error deleting booking:", error);
        // Handle error if necessary
      }
    },
    editBooking(bookingId) {
      console.log("Edit button clicked for booking ID:", bookingId);
      // Implement edit logic if needed
    },
    // Other methods...
  },
  mounted() {
    this.$store.dispatch('fetchBookings');
  }
};
</script>

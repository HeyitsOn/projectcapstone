<template>
  <div class="container">
    <div class="row">
      <h2 class="display-4">
        <button class="btn btn-primary" @click="showBookings = true; showUsers = false; showPackages = false">Bookings</button>
      </h2>
    </div>
    <div class="row" v-show="showBookings && bookings">
      <!-- Bookings table code here -->
      <div class="card">
        <div class="card-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Event Date</th>
                <th>Event Type</th>
                <th>Guest Count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="booking in bookings" :key="booking.booking_id">
                <td>{{ booking.customer_name }}</td>
                <td>{{ booking.event_date }}</td>
                <td>{{ booking.event_type }}</td>
                <td>{{ booking.guest_count }}</td>
                <td>
                  <button class="btn btn-danger" @click="deleteBooking(booking.booking_id)">Delete</button>
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
export default {
  data() {
    return {
      showBookings: true,
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
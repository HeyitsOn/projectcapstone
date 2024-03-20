<template>
  <div class="container">
    <div class="row">

    </div>
    <div class="row">
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
                  <button class="btn btn-danger" @click="deleteWeddingBooking(booking.booking_id)">Delete</button>
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
  name: 'BookingsView',
  data() {
    return {
      showWeddingBookings: true,
      bookings: [],
    };
  },
    methods() {
    
    },
    
  mounted() {
this.$store.dispatch('fetchBooking');
// console.log("weddingBookings: ", this.weddingBookings);

  }
};
</script>

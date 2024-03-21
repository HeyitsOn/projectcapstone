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
      // bookings: [],
    };
  },
    computed: {
      bookings() { 
        return this.$store.state.bookings;
      }
  },
    methods() {
    openModal = true;
    },
    
  mounted() {
this.$store.dispatch('fetchBookings');
// console.log("weddingBookings: ", this.weddingBookings);

  }
};
</script>

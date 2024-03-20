<template>
    <div class="users-table text-white row">
      <div class="container col-7">
        <div class="login m-5">
          <h1>Register</h1>
          <form @submit.prevent="register" class="needs-validation" novalidate>
            <div class="input-box mb-3">
              <input v-model="firstName" type="text" class="form-control" placeholder="First Name" required>
              <i class="fa fa-user"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="lastName" type="text" class="form-control" placeholder="Last Name" required>
              <i class="fa fa-user"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="userAge" id="age" type="number" class="form-control" placeholder="Age">
              <i class="fa fa-calendar"></i>
            </div>
            <div class="input-box mb-3">
              <select v-model="gender" id="gender" class="form-select" required>
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <i class="fa fa-venus-mars"></i>
            </div>
            <div class="input-box mb-3">
              <select v-model="userRole" id="role" class="form-select" required>
                <option value="" disabled>Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
              <i class="fa fa-cogs"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="emailAdd" type="email" class="form-control" placeholder="Email" required>
              <i class="fa fa-envelope"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="userPass" type="password" class="form-control" placeholder="Password" required>
              <i class="fa fa-lock"></i>
            </div>
            <div class="input-box mb-3">
              <input v-model="userProfile" type="text" class="form-control" placeholder="User Profile">
              <i class="fa fa-user-circle"></i>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" v-model="saveAccount">
              <label class="form-check-label">Save account for future logins</label>
            </div>
            <p class="text-center">Already have an account? <router-link to="/login">Login</router-link></p>
            <button type="submit" class="btn btn-primary d-block mx-auto" :disabled="submitting">
              {{ submitting ? 'Creating Account...' : 'Create an account' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
import Swal from 'sweetalert2';
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        userRole: '',
        emailAdd: '',
        userPass: '',
        userProfile: '',
        saveAccount: false,
        submitting: false,
      };
    },
    methods: {
      async register() {
        if (!this.firstName || !this.lastName || !this.emailAdd || !this.userPass) {
          alert('Please fill in all required fields.');
          return;
        }
        try {
          this.submitting = true;
          const response = await axios.post('https://projectcapstone.onrender.com/users/register', {
            firstName: this.firstName,
            lastName: this.lastName,
            userAge: this.userAge,
            gender: this.gender,
            userRole: this.userRole,
            emailAdd: this.emailAdd,
            userPass: this.userPass,
            userProfile: this.userProfile,
          });
          Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'You have successfully registered.',
          footer: `Your token is: ${token}` // Adjust this line based on where your token is stored
        });
          const token = response.data.token;
          document.cookie = `token=${token}; path=/`;
          alert('Registration successful!');
          console.log(response.data);
          this.firstName = '';
          this.lastName = '';
          this.userAge = '';
          this.gender = '';
          this.userRole = '';
          this.emailAdd = '';
          this.userPass = '';
          this.userProfile = '';
          this.saveAccount = false;
        } catch (error) {
          if (error.response && error.response.status === 409) {
            alert('This email address is already registered. Please log in instead.');
            this.$router.push('/login');
          } else {
            console.error('Error registering user:', error);
            alert('An error occurred during registration. Please try again later.');
          }
        }
        finally {
          this.submitting = false;
        }
      },
    },
  };
  </script>

<style scoped>
.users-table{
  background-image: url(https://media-api.xogrp.com/images/28f240e9-d113-49df-94de-0a304ca47724~rs_1536.666);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.container {
  backdrop-filter: blur(4px);
}
button {
  background-color: #885b19;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
}

</style>
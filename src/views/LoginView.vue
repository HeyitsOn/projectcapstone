<template>
  <div class="login row">
    <div class="container text-white col-6">
      <div class="login-body">
        <h1 class="login-header">Login Form</h1>
        <form @submit.prevent="login" class="needs-validation" novalidate>
          <div class="input-box">
            <input type="email" v-model="emailAdd" class="form-control" id="email" placeholder="Email" required>
            <div class="invalid-feedback">Please provide a valid email.</div>
            <i class="fa fa-envelope"></i>
          </div>
          <div class="input-box">
            <input type="password" v-model="userPass" class="form-control" id="password" placeholder="Password" required>
            <div class="invalid-feedback">Please provide your password.</div>
            <i class="fa fa-lock"></i>
          </div>
          <a href="#" class="for_get">Forget Your Password?</a>
          <button type="submit" class="btn btn-primary">Login</button>
          <p v-if="loginError" class="mt-3 error-message">{{ loginError }}</p>
          <p class="mt-3">Don't have an account? <router-link to="/register">Register</router-link></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      emailAdd: '',
      userPass: '',
      loginError: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://projectcapstone.onrender.com/users/login', {
          emailAdd: this.emailAdd,
          userPass: this.userPass
        });
        const token = response.data.token;
        document.cookie = `token=${token}; path=/`;
        Swal.fire({
          icon: 'success',
          title: 'Login successful!',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(response.data);
        console.log("Email:", this.emailAdd);
        console.log("Password:", this.userPass);

        // Update isLoggedIn status
        this.$root.isLoggedIn = true;
        this.$router.push('/'); // Redirect to home page after successful login
      } catch (error) {
        if (error.response && error.response.status === 404) {
          this.loginError = 'User not found. Please sign up first.';
        } else {
          console.error('Error logging in:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An error occurred during login. Please try again later.'
          });
        }
      }
    }
  }
}
</script>


<style scoped>  

h2{
  margin-left: 50%;
  color:white;
  /* margin-top: 20px; */

}
/* Loader animation */
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #34db45;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: auto;
  margin-top: 20px;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.login{
  background-image: url(https://media-api.xogrp.com/images/28f240e9-d113-49df-94de-0a304ca47724~rs_1536.666);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  /* width: 80%; */
  height: 100vh;
}

.form {
  margin-left: 40%;
  /* margin-top: 60%; */
  max-width: 360px;
  padding: 20px;
  border-radius: 50px;
  color: white;
}

.button {
  margin-left: 40%;
  max-width: 360px;
  border-radius: 50px;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  color: black;
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

button:hover {
  background-color: #a80fad;
}
</style>

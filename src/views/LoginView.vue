<template>
  <div class="container">
    <h2 v-if="isNewUser">Sign Up</h2>
    <h2 v-else>Login</h2>
    <!-- Add transition for loader -->
    <transition name="fade">
      <div v-if="isLoading" class="loader"></div>
    </transition>
    <!-- Sign up form -->
    <form class="form" v-if="isNewUser && !isLoading" @submit.prevent="signup">
      <label for="new-username">Username</label>
      <input type="text" id="new-username" v-model="username" required>
      <label for="new-password">Password</label>
      <input type="password" id="new-password" v-model="password" required>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>
      <label for="dob">Date of Birth</label>
      <input type="date" id="dob" v-model="dob" required>
      <button type="submit">Sign Up</button>
    </form>
    <!-- Login form -->
    <form class="form" v-else-if="!isNewUser && !isLoading" @submit.prevent="login">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" required>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
    <!-- Error message -->
    <p v-if="error" style="color: red;">{{ error }}</p>
    <!-- Toggle form button -->
    <button class="button" @click="toggleForm" v-if="!isLoading">
      {{ isNewUser ? 'Switch to Login' : 'Switch to Sign Up' }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      email: '',
      dob: '',
      error: '',
      isNewUser: true,
      isLoading: false // Add isLoading data property
    };
  },
  methods: {
    signup() {
      if (this.username === '' || this.password === '' || this.email === '' || this.dob === '') {
        this.error = 'Please fill in all fields.';
      } else {
        this.isLoading = true; // Start loader animation
        // Simulate sign-up process with timeout
        setTimeout(() => {
          alert('Signed up successfully!');
          this.isLoading = false; // Stop loader animation
          this.username = '';
          this.password = '';
          this.email = '';
          this.dob = '';
          this.error = '';
        }, 2000);
      }
    },
    login() {
      if (this.username === '' || this.password === '') {
        this.error = 'Please enter both username and password.';
      } else {
        this.isLoading = true; // Start loader animation
        // Simulate login process with timeout
        setTimeout(() => {
          alert('Logged in successfully!');
          this.isLoading = false; // Stop loader animation
          this.username = '';
          this.password = '';
          this.error = '';
        }, 2000);
      }
    },
    toggleForm() {
      this.isLoading = true; // Start loader animation
      setTimeout(() => {
        this.isNewUser = !this.isNewUser;
        this.error = '';
        this.username = '';
        this.password = '';
        this.email = '';
        this.dob = '';
        this.isLoading = false; // Stop loader animation
      }, 1000);
    }
  }
}
</script>

<style scoped>
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

.container {
  background-image: url(https://media-api.xogrp.com/images/28f240e9-d113-49df-94de-0a304ca47724~rs_1536.666);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
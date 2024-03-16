<template>
  <div class="container">
    <h2  v-if="isNewUser">Sign Up</h2>
    <h2 v-else>Login</h2>
    <form class= "form" v-if="isNewUser" @submit.prevent="signup">
      <label for="new-username">Username</label>
      <input type="text" id="new-username" v-model="username" required>
      <label for="new-password">Password</label>
      <input type="password" id="new-password" v-model="password" required>
      <button type="submit">Sign Up</button>
    </form>
    <form  class= "form"v-else @submit.prevent="login">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" required>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" style="color: red;">{{ error }}</p>
    <button class= 'button' @click="toggleForm">{{ isNewUser ? 'Switch to Login' : 'Switch to Sign Up' }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
      isNewUser: true
    };
  },
  methods: {
    signup() {
      if (this.username === '' || this.password === '') {
        this.error = 'Please enter both username and password.';
      } else {
        alert('Signed up successfully!');
        this.username = '';
        this.password = '';
        this.error = '';
      }
    },
    login() {
      if (this.username === '' || this.password === '') {
        this.error = 'Please enter both username and password.';
      } else {
        alert('Logged in successfully!');
        this.username = '';
        this.password = '';
        this.error = '';
      }
    },
    toggleForm() {
      this.isNewUser = !this.isNewUser;
      this.error = '';
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style scoped>
.form {
  margin-left: 40%;
  margin-top: 10%;
  max-width: 360px;
  padding: 20px;
  border-radius: 50px;
  color: white;
  
}
.button{
  margin-left: 40%;
  /* margin-top: 10%; */
  max-width: 360px;
  /* padding: 20px; */
  border-radius: 50px;
}
.container {
  background-image: url(https://media-api.xogrp.com/images/28f240e9-d113-49df-94de-0a304ca47724~rs_1536.666);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
  ;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
}
input[type="text"],
input[type="password"] {
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
  background-color: #885B19;
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

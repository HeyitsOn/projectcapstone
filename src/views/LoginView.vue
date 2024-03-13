<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" required>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      if (this.username === '' || this.password === '') {
        this.error = 'Please enter both username and password.';
      } else {
        alert('Logged in successfully!');
        this.username = '';
        this.password = '';
        this.error = '';
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 10%;
  max-width: 360px;
  /* margin: 10px; */
  padding: 20px;
  background: #514a4a;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

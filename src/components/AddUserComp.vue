<template>
  <!-- <div> -->
    <!-- <h1>Add User</h1> -->
    <!-- <form @submit.prevent="AddUser">
      <input type="text" v-model="userID" placeholder="UserID">
      <input type="text" v-model="firstName" placeholder="firstName">
      <input type="text" v-model="lastName" placeholder="lastName">
      <input type="Number" v-model="Age" placeholder="Age">
      <input type="text" v-model="gender" placeholder="gender">
      <input type="text" v-model="Password" placeholder="Password">
      <input type="" v-model="Role" placeholder="Role">
      <button type="submit">Add User</button>
    </form> -->
    <!-- <h1>Users</h1>
    <table>
      <thead>
        <tr>
          <th>UserID</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>userAge</th>
          <th>gender</th>
          <th>emailAdd</th>
          <th>userPwd</th>
          <th>userRole</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.ID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.Age }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.Pwd }}</td>
          <td>{{ user.Role }}</td>
        </tr>
      </tbody>
    </table>
  </div> -->
</template>
<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      users: []
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      // Fetch users from the backend API
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async addUser() {
      // Send a POST request to the backend API to add a user
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email
          })
        });
        if (response.ok) {
          // If successful, clear the form and fetch updated user list
          this.username = '';
          this.email = '';
          this.fetchUsers();
        } else {
          console.error('Failed to add user:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding user:', error);
      }
    }
  }
};
</script>
<style scoped>
</style>
<template>
  <div class="container">
    <div class="row">
      <h2 class="display-4">
        <button class="btn btn-primary mr-2" @click="showUsers = true; showPackages = false"
                style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
          Users
        </button>
        <button class="btn btn-primary mr-2" @click="showPackages = true; showUsers = false"
                style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
                Packages
        </button>
      </h2>
    </div>
    <div class="row" v-show="showUsers && users">
      <!-- Modal -->
      <div class="btn-tdn mb-2 ">
        <button class="btn btn-success edt-btn mr-6" data-bs-toggle="modal" data-bs-target="#add">add User</button>
      </div>
      <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="add">Add Users</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input class="w-100" type="text" placeholder="First Name" v-model="firstName">
              <input class="w-100" type="text" placeholder="Last Name">
              <input class="w-100" type="text" placeholder="Age">
              <input class="w-100" type="text" placeholder="Gender">
              <input class="w-100" type="text" placeholder="Email">
              <input class="w-100" type="text" placeholder="Password">
              <input class="w-100" type="text" placeholder="Role">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="register">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>User ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>User age</th>
            <th>Gender</th>
            <th>Email address</th>
            <th>User role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td class="d-flex justify-content-between">
              <button class="btn btn-success">Edit</button>
              <button class="btn btn-success">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row" v-show="showPackages && packages">
      <!-- Modal -->
      <div class="btn-tdn mb-2 ">
            <button class="btn btn-success edt-btn mr-6" data-bs-toggle="modal" data-bs-target="#addPackageModal">Add
              Package</button>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showUsers: true,
        showPackages: false,
        firstName: '' // Added empty string for v-model binding
      };
    },
    methods: {
      register() {
        this.$store.dispatch('register');
      },
    },
    computed: {
      users() {
        return this.$store.state.users;
      },
      packages() {
        return this.$store.state.packages;
      },
    },
    mounted() {
      this.$store.dispatch("fetchUsers");
      this.$store.dispatch("fetchPackages");
    },
  };
</script>
<style scoped>
  .table{
    background-color: #918E8E;
  }
  .edt-btn {
    position: relative;
  }
  .btn-tdn {
    width: 30%;
  }
  </style>
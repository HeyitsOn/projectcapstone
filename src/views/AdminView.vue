<template>
  <div class="container">
    <div class="row">
      <h2 class="display-4">
        <button class="btn btn-primary mr-2" @click="showUsers = true; showPackages = false">
          Users
        </button>
        <button class="btn btn-primary mr-2" @click="showPackages = true; showUsers = false">
          Packages
        </button>
      </h2>
    </div>
    <div class="row" v-show="showUsers">
      <div class="btn-group mb-2">
        <button class="btn btn-success" @click="showAddUserModal = true">Add User</button>
      </div>
      <table class="table table-bordered">
        <!-- Table headers -->
        <thead>
          <tr>
                        <th>User ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>User age</th>
                        <th>Gender</th>
                        <th>Email address</th>
                        <th>User role</th>
                        <th>
                            Action
                        </th>
                    </tr>
        </thead>
        <!-- Table body -->
        <tbody v-if="users" >
          <tr v-for="user in users" :key="user.id">
            <td>
                   {{ user.userID }}
                        </td>
                        <td>
                            {{ user.firstName }}
                        </td>
                        <td>
                            {{ user.lastName }}
                        </td>
                        <td>
                            {{ user.userAge }}
                        </td>
                        <td>
                            {{ user.gender }}
                        </td>
                        <td>
                            {{ user.emailAdd }}
                        </td>
                        <td>
                            {{ user.userRole }}
                        </td>

               <td class="d-flex justify-content-between">
              <button class="btn btn-primary" @click="editUserModal(user)">Edit</button>
              <button class="btn btn-danger" @click="deleteUser(user.ID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row" v-show="showPackages">
      <div class="btn-group mb-2">
        <button class="btn btn-success" @click="showAddPackageModal = true">Add Package</button>
      </div>
      <table class="table table-bordered">
        <!-- Table headers -->
        <thead>
          <tr>
            <th>Package ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <!-- Table body -->
        <tbody>
          <tr v-for="data in packages" :key="package.packID">
            <td>{{ package.packID }}</td>
            <td>{{ package.name }}</td>
            <td>{{ package.description }}</td>
            <td>{{ package.price }}</td>
            <td>
              <button class="btn btn-primary" @click="editPackageModal(data)">Edit</button>
              <button class="btn btn-danger" @click="deletePackage(package.packID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add User Modal -->
    <div class="modal fade" id="addUserModal" tabindex="-1" role="dialog">
      <!-- Modal content -->
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Add User</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Add user form -->
            <form @submit.prevent="addUser(newUser)">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" v-model="newUser.name" required>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" v-model="newUser.email" required>
              </div>
              <div class="form-group">
                <label for="role">Role:</label>
                <input type="text" class="form-control" id="role" v-model="newUser.role" required>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit User Modal -->
    <div class="modal fade" id="editUserModal" tabindex="-1" role="dialog">
      <!-- Modal content -->
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Edit User</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Edit user form -->
            <form @submit.prevent="editUser">
              <div class="form-group">
                <label for="editUserName">Name:</label>
                <input type="text" class="form-control" id="editUserName" v-model="editingUser.name" required>
              </div>
              <div class="form-group">
                <label for="editUserEmail">Email:</label>
                <input type="email" class="form-control" id="editUserEmail" v-model="editingUser.email" required>
              </div>
              <div class="form-group">
                <label for="editUserRole">Role:</label>
                <input type="text" class="form-control" id="editUserRole" v-model="editingUser.role" required>
              </div>
              <button type="submit" class="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Package Modal -->
    <div class="modal fade" id="addPackageModal" tabindex="-1" role="dialog">
      <!-- Modal content -->
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Add Package</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Add package form -->
            <form @submit.prevent="addPackage(newPackage)">
              <div class="form-group">
                <label for="packageName">Name:</label>
                <input type="text" class="form-control" id="packageName" v-model="newPackage.name" required>
              </div>
              <div class="form-group">
                <label for="packageDescription">Description:</label>
                <textarea class="form-control" id="packageDescription" v-model="newPackage.description" required></textarea>
              </div>
              <div class="form-group">
                <label for="packagePrice">Price:</label>
                <input type="number" class="form-control" id="packagePrice" v-model="newPackage.price" required>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Package Modal -->
    <div class="modal fade" id="editPackageModal" tabindex="-1" role="dialog">
      <!-- Modal content -->
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Edit Package</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Edit package form -->
            <form @submit.prevent="editPackage">
              <div class="form-group">
                <label for="editPackageName">Name:</label>
                <input type="text" class="form-control" id="editPackageName" v-model="editingPackage.name" required>
              </div>
              <div class="form-group">
                <label for="editPackageDescription">Description:</label>
                <textarea class="form-control" id="editPackageDescription" v-model="editingPackage.description" required></textarea>
              </div>
              <div class="form-group">
                <label for="editPackagePrice">Price:</label>
                <input type="number" class="form-control" id="editPackagePrice" v-model="editingPackage.price" required>
              </div>
              <button type="submit" class="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
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
      showAddUserModal: false,
      showEditUserModal: false,
      showAddPackageModal: false,
      showEditPackageModal: false,
      newUser: {
        name: '',
        email: '',
        role: '',
      },
      newPackage: {
        name: '',
        description: '',
        price: 0,
      },
      editingUser: {
        name: '',
        email: '',
        role: '',
      },
      editingPackage: {
        name: '',
        description: '',
        price: 0,
      },
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    packages() {
      return this.$store.state.packages;
    },
  },
  methods: {
    // User actions
    addUser(newUser) {
      // Call your Vuex action to add user
      this.$store.dispatch('addUser', newUser);
      this.showAddUserModal = false;
    },
    editUserModal(user) {
      this.editingUser = { ...user };
      this.showEditUserModal = true;
    },
    editUser() {
      this.$store.dispatch('editUser', this.editingUser);
      this.showEditUserModal = false;
    },
    deleteUser(userId) {
      // Call your Vuex action to delete user
      this.$store.dispatch('deleteUser', userId);
    },
    // Package actions
    addPackage(newPackage) {
      // Call your Vuex action to add package
      this.$store.dispatch('addPackage', newPackage);
      this.showAddPackageModal = false;
    },
    editPackageModal(data) {
      this.editingPackage = { ...data };
      this.showEditPackageModal = true;
    },
    editPackage() {
      this.$store.dispatch('editPackage', this.editingPackage);
      this.showEditPackageModal = false;
    },
    deletePackage(packageId) {
      // Call your Vuex action to delete package
      this.$store.dispatch('deletePackage', packageId);
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>

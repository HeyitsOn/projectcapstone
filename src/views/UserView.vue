
<template>
  <div class="users-table vh-100">
    <h1 class="display-1">
      <router-link :to="{ name: currentPage === 'admin' ? 'user' : 'admin' }">
        {{ currentPage === 'admin' ? 'USERS PAGE' : 'ADMIN PAGE' }}
      </router-link>
    </h1>  
    <div>
  <input v-model="userID" type="text" placeholder="ID">
  <input v-model="firstName" type="text" placeholder="First Name">
  <input v-model="lastName" type="text" placeholder="Last Name">
  <input v-model="Age" type="number" placeholder="Age">
  <input v-model="Gender" type="text" placeholder="Gender">
  <input v-model="Role" type="text" placeholder="Role">
  <input v-model="emailAdd" type="text" placeholder="Email">
  <input v-model="userPass" type="text" placeholder="userpass">
  <input v-model="userProfile" type="text" placeholder="User Profile">
  <button class="add" @click="postUser">Add</button>
</div>

    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Email</th>
          <th>User Profile</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userPass }}</td>
          <td>{{ user.userProfile }}</td>
          <td><button  class="edit" @click="editUser(user.userID)">edit</button> </td>
      <td><button class="delete" @click="deleteUser(user.userID)">delete</button></td>
    
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted, computed,ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const users = computed(() => store.getters.users);

    onMounted(() => {
      store.dispatch('fetchUsers');
    });

    const userID = ref(null);
  const firstName = ref(null);
  const lastName = ref(null);
  const userAge = ref(null);
  const gender = ref(null);
  const userRole = ref(null);
  const emailAdd = ref(null);
  const userPass = ref(null);
  const userProfile = ref(null);

  const deleteUser = (userID) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      store.dispatch('deleteusers', userID);
      window.alert('User has been deleted.');
    }
  };

  const postUser = async () => {
const newUser = {
  firstName: firstName.value,
  lastName: lastName.value,
  userAge: userAge.value,
  gender: gender.value,
  userRole: userRole.value,
  emailAdd: emailAdd.value,
  userPass: userPass.value,
  userProfile: userProfile.value
};

try {

  await store.dispatch('postusers', newUser);
  
 
  await store.dispatch('fetchUsers'); 
  clearFields();
  window.alert('User has been added.');
} catch (error) {
  console.error(error);
  window.alert('Failed to add user.');
}
};

  const clearFields = () => {
    userID.value = null;
    firstName.value = null;
    lastName.value = null;
    userAge.value = null;
    gender.value = null;
    Role.value = null;
    emailAdd.value = null;
    userPass.value = null;
    userProfile.value = null;
  };


    return {
      users,
      clearFields,
      postUser,
      deleteUser,
      currentPage() {
        return this.$route.name;
      }
    };
  }
};
</script>

<style scoped>
.users-table {
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>

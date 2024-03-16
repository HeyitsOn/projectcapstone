<template>
  <div>
    <div>
      <h2>Register New User</h2>
      <input v-model="newUser.firstName" placeholder="Enter First Name" />
      <input v-model="newUser.lastName" placeholder="Enter Last Name" />
      <input v-model="newUser.userAge" placeholder="Enter Age" type="number" />
      <input v-model="newUser.gender" placeholder="Enter Gender" />
      <input v-model="newUser.userRole" placeholder="Enter Role" />
      <input v-model="newUser.emailAdd" placeholder="Enter Email" />
      <input v-model="newUser.userPass" placeholder="Enter Password" type="password" />
      <input v-model="newUser.profileUrl" placeholder="Enter Profile URL" />
      <button @click="registerUser">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newUser: {
        firstName: "",
        lastName: "",
        userAge: 0,
        gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        profileUrl: "",
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post(
          "https://projectcapstone.onrender.com/",
          this.newUser
        );
        alert(response.data.msg);
        this.$emit("userRegistered"); 
        this.newUser = {
          firstName: "",
          lastName: "",
          userAge: 0,
          gender: "",
          userRole: "",
          emailAdd: "",
          userPass: "",
          profileUrl: "",
        };
      } catch (error) {
        console.error("Error adding user:", error); 
     }
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>

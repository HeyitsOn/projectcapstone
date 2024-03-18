<template>
  <nav class="navbar navbar-expand-lg justify-content-start" id="black-ops">
    <div class="container-fluid">
      <img src="https://i.ibb.co/4Tx2WSh/nlogo-removebg-preview.png" id="logo">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/packages" class="nav-link">Packages</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Bookings" class="nav-link">Bookings</router-link>
          </li>
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path d="M8 9c-2.485 0-4.5.55-4.5 2.25V13a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.75C12.5 9.55 10.485 9 8 9zm0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
          </a>
          <ul class="dropdown-menu" aria-labelledby="profileDropdown">
            <li><router-link to="/login" class="dropdown-item">Login</router-link></li>
            <li><router-link to="/register" class="dropdown-item">Register</router-link></li>
          </ul>
        </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  components: {}
};
</script>
<style scoped>
nav {
  background-color: #D1CEC9;
  padding: 10px 0 ;
}
#black-ops {
  font-family: "Black Ops One", system-ui;
  font-weight: 400;
  font-style: normal;
}
#logo {
  width: 50px;
  margin-right: 30px;
}
.navbar-nav .nav-item {
  margin: 0 10px;
}
.navbar {
  display: flex;
}
.navbar-nav .nav-link {
  color: #198879 ;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}
.navbar-toggler {
  border: none;
}
.navbar-toggler:focus {
  outline: none;
}
.navbar-toggler-icon {
  background-color: #D1CEC9;
}
</style>
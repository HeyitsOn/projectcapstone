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
              <router-link to="/Login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Packages" class="nav-link">Packages</router-link>
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
            <!-- <li class="nav-item">
            <router-link to="/Acommodation" class="nav-link">Accomdation</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </template>
  <script>
  export default {
    components: {
    
    }
  };
  </script>
  <style scoped>
  nav {
    background-color:#d1cec9;
    padding: 10px 0 ;
  }
  #black-ops {
  font-family: "Black Ops One", system-ui;
  font-weight: 400;
  font-style: normal;
}
  
  #logo {
    width: 50px; 
    margin-right:30px; 
  }
  .navbar-nav .nav-item {
    margin: 0 10px;
  }
  .navbar{
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
    background-color:#d1cec9;
  }
  </style> 
<template>
<navComp/>
<!-- <AddPackage/> -->
<SpinnerComp/>
<AddUserComp/>
<router-view/>
<FooterCamp/>
</template>
<script>
import  NavComp from "./components/NavComp.vue";
import FooterCamp  from "./components/FooterCamp.vue";
import SpinnerComp from "./components/SpinnerComp.vue";
import AddUserComp from "./components/AddUserComp.vue";
// import AddPackage from "./components/AddPackage.vue";
export default {
  components: {
    NavComp,
    FooterCamp,
    SpinnerComp,
    AddUserComp,
  // AddPackage,
  }
}
</script>
<style src="../src/assets/CSS/style.css" >
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

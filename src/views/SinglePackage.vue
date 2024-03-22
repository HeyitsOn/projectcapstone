<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Package Details</h2>
    </div>
    <div class="row">
      <Card v-if="package" class="Card">
        <template v-slot:cardHeader>
          <h4 class="card-title">{{ package.packName }}</h4>
        </template>
        <template v-slot:cardBody>
          <div>
            <img class="img-fluid" :src="package.packUrl" :alt="package.packName"/>
          </div>
          <p class="card-text text-dark p-2 ">
            {{ package.packDescription }}
          </p>
          <p class="card-text text-dark  p-2">
            {{ package.packavaiblity }}
          </p>
          <p class="card-text text-dark  p-2">
            Amount: R{{ package.packamount }} <!-- Fixed variable name -->
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  components: {
    Card,
  },
  computed: {
    package() {
      return this.$store.state.singlePackage
    },
  },
  mounted() {
    this.$store.dispatch('fetchPackage', this.$route.params)
    // console.log('On mounted SinglePackage:',this.SinglePackage);
    // console.log('On mounted:',this.$route.params);

  }
}
</script>

<style scoped>
.Card {
  background-color: aqua;
  width: 600px;
  margin-left:300px;
  /* height:50px; */
  animation: colorChange 5s infinite alternate; /* Change color every 5 seconds */
}

@keyframes colorChange {
  0% {
    background-color: rgb(136, 255, 0);
  }
  50% {
    background-color: rgb(248, 3, 3); 
  }
  100% {
    background-color: rgb(255, 127, 214); /* Change back to aquamarine at the end */
  }
}
.img-fluid{
margin-left: 10px;
}
</style>

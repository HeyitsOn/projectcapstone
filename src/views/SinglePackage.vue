<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Package Details</h2>
      </div>
      <div class="row">
        <Card v-if="SinglePackage">
          <template v-slot:cardHeader>
            <h4 class="card-title">{{ SinglePackage.packName }}</h4>
          </template>
          <template v-slot:cardBody>
            <div>
              <img class="img-fluid" :src="SinglePackage.packUrl" :alt="SinglePackage.packName"/>
            </div>
            <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
              {{ SinglePackage.packDescription }}
            </p>
            <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
              Amount: R{{ SinglePackage.packAmount }} <!-- Fixed variable name -->
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
      SinglePackage() {
        return this.$store.state.SinglePackage;
      }
    },
    mounted() {
      this.$store.dispatch('fetchSinglePackage', this.$route.params);
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  
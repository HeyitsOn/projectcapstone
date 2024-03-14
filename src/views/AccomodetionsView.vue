<template>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-5 mt-4">
            <input type="text" v-model="searchQuery" placeholder="Search Package by name" class="form-control">
          </div>
          <div class="col-2 mt-4">
            <button class="btn btn-sm btn-custom" @click="toggleSortOrder">{{ ascendingOrder ? 'Sort by Price (Ascending)' : 'Sort by Price (Descending)' }}</button>
          </div>
        </div>
        <div class="row gap-5 justify-content-center m-3" v-if="packages">
          <Card v-for="data in filteredPackages" :key="data.packID">
            <template #cardHeader>
              <img :src="data.packUrl" class="car-img-top" alt="" height="200" width = "200">
              <h4 class="card-title">{{ data.packName }}</h4>
            </template>
            <template #cardBody>
              <!-- <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                Description: {{ data.packDescription }}
              </p> -->
              <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                Availability: {{ data.packavaiblity }}
              </p>
              <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                Amount: R{{ data.packamount }}
              </p>
              <router-link :to="{ name: 'SinglePackage', params: { id: data.packID }}">View More</router-link>
            </template>
          </Card>
        </div>
        <div class="row" v-else>
          <p class="lead">Loading</p>
        </div>
      </div>
       </body>
  </template>
  <script>
  import Card from '@/components/Card.vue';
  
  export default {
    name: 'PackagesView',
    components: {
      Card
    },
    data() {
      return {
        ascendingOrder: true,
        searchQuery: ''
      };
    },
    computed: {
      packages() {
        return this.$store.state.packages;
      },
      sortedPackages() {
        const sorted = [...this.packages];
        sorted.sort((a, b) => (this.ascendingOrder ? a.packAmount - b.packAmount : b.packAmount - a.packAmount));
        return sorted;
      },
      filteredPackages() {
        return this.sortedPackages.filter(packages =>
          packages.packName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      toggleSortOrder() {
        this.ascendingOrder = !this.ascendingOrder;
      }
    },
    mounted() {
      this.$store.dispatch('fetchPackages');
      console.log("packages: ", this.packages);
    }
  }
  </script>
  <style scoped>
  .container{
    background-color: #cdb9a8;
  }
  </style>
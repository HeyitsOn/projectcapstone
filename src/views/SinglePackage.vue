<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Package Details</h2>
    </div>
    <div class="row">
      <Card v-if="package">
        <template v-slot:cardHeader>
          <h4 class="card-title">{{ package.packName }}</h4>
        </template>
        <template v-slot:cardBody>
          <div>
            <img class="img-fluid" :src="package.packUrl" :alt="package.packName"/>
          </div>
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            {{ package.packDescription }}
          </p>
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            {{ package.packavaiblity }}
          </p>
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
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
.card-text{
  width: 100%;
}

</style>

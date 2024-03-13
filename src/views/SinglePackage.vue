<template>
  <div class="container">
      <div class="row">
          <h2 class="display-2">Package Details</h2>
      </div>
      <div class="row">
          <Card v-if="product">
              <template #cardHeader>
                  <h4 class="card-title">{{ package.packID }}</h4>
              </template>
              <template #cardBody>
                    <div>
                        <img class="img-fluid" :src="product.ProdUrl" :alt="package.packName"/>
                    </div>
                  <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                     {{ package.packDescription }}
                  </p>
                  
                  <!-- <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                      Amount: R{{ product.prodAmount }}
                  </p> -->
              </template>
          </Card>
      </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
  export default {
      components:{
          Card,
      },
      computed: {
          product() {
              return this.$store.state.product
          }
      },
      mounted() {
          this.$store.dispatch('fetchProduct', this.$route.params)
      }
  }
</script>

<style scoped>

</style>
<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Package Details</h2>
        </div>
        <div class="row">
            <Card v-if="Singlepackage">
                <template v-slot:cardHeader>
                    <h4 class="card-title">{{ SinglePackage.packID }}</h4>
                </template>
                <template v-slot:cardBody>
                      <div>
                          <img class="img-fluid" :src="package.packUrl" :alt="package.packName"/>
                      </div>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                       {{ package.packDescription }}
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
        components:{
            Card,
        },
        computed: {
          package() {
                return this.$store.state.package
            }
        },
        mounted() {
            this.$store.dispatch('fetchPackage', this.$route.params)
        }
    }
  </script>
  
  <style scoped>
  
  </style>
  
<!-- Accommodation.vue -->
<template>
    <div class="accommodation-section">
      <h2>Accommodation Options</h2>
      <!-- Render images using Vue -->
      <div v-for="(image, index) in accommodationImages" :key="index">
        <img :src="image" alt="Accommodation Image" class="accommodation-image">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Array of accommodation images
        accommodationImages: [
          'https://media-api.xogrp.com/images/3f007c5a-2f91-49ef-9b69-d44cc47ef90c~rs_960.h',
          'https://cdn0.weddingwire.com/article/5403/3_2/1280/jpg/13045-biltmore-house-fete-photography.webp',
          'https://belleekcastle.com/wp-content/uploads/2023/03/kphotography.ie-95.jpg',
          'https://belleekcastle.com/wp-content/uploads/2023/03/442.jpg.webp'
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  .accommodation-image {
    width: 100%;
    max-width: 400px; /* Adjust as needed */
    margin-bottom: 20px;
  }
  </style>
import Accommodation from './components/Accommodation.vue';

export default {
  components: {
    Accommodation
  }
};
</script>

<style>
/* Add y  
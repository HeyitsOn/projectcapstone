<template>
    <div>
      <div v-if="!loaded" class="loader">
        <div class="loader-spinner"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loaded: false 
      };
    },
    mounted() {
      setTimeout(() => {
        this.loaded = true;
      }, 2000);
    }
  }
  </script>
  
  <style scoped>
  .loader {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3333;
  }
  .loader-spinner {
    border: 6px solid yellow; 
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite, changeColor 3s linear infinite; 
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes changeColor {
    0% { border-color: yellow; }
    25% { border-color: rgb(85, 255, 0); }
    50% { border-color: red; }
    75% { border-color: purple; }
    100% { border-color: rgb(47, 255, 0); }
  }
  </style>
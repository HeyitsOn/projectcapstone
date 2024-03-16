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
  },
};
</script>

<style scoped>
.loader {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(190, 178, 178, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3333;
}
.loader-spinner {
  width: 80px;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.loader-spinner::before {
  content: "";
  width: 20px;
  height: 20px;
  background-color: rgb(255, 0, 25);
}
.loader-spinner::after {
  content: "";
  width: 20px;
  height: 20px;
  background-color: yellow;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

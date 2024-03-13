<template >
    <footer>
      <p>&copy; {{ currentYear }} Copyright © 2024 Snowflake. All Rights Reserved. | Privacy Policy | Terms of Service | </p>
       </footer>
</template>
<script>
 export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
<style scoped>
footer {
  background-color: #885B19;
  color: #fff;
  padding: 20px;
  text-align: center;
}
</style>
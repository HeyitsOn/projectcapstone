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
   background-image: url(https://i.ibb.co/r40ZTHL/gg3.png);
   height: max-content;
  color:#198879; 
  padding: 20px;
  text-align: center;
}
</style>
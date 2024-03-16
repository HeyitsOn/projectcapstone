<template>
  <section class="home">
    <div class="row">
      <img src="https://media-api.xogrp.com/images/28f240e9-d113-49df-94de-0a304ca47724~rs_1536.666" class="overlay-image">
      <h1 class="home-text">Snowlake Wedding Venue</h1>
    </div>
  </section>
</template>

<script>
  
</script>

<style scoped>
  section {
    background-image: url("https://mcstaging-blog.astteria.com/wp-content/uploads/2023/02/Untitled-design-60.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    position: relative; 

  }

.home-text{
  position: absolute;
  /* margin-left: 50%; */
  margin-top: 25%;
}
  .lead{
    margin-top: 10rem;
    /* align-items: center; */
    /* justify-content: center; */
    /* align-content: center; */
    /* text-align: center; */
    /* margin-bottom: 100%; */
  }

  .overlay-image {
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    border-radius: 50% 50% 0 0;
    width: 700px;
    height: 600px;
   
  }
  @media (max-width: 768px) {
    .home-text {
      margin-top: 15%;
    }

    .overlay-image {
      width: 90%;
      max-width: none;
      height: auto;
    }
  }
  h1{
    text-align: center;
    color: aliceblue;
  }
</style>

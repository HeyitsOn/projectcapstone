<template>
  <section>
    <div class="contact-box">
    <div class="contact">
      <div class="contact-section">
        <div class="contact-content">
          <div class="details">
            <h2><u>Get in touch with Us</u></h2>
            <ul>
              <li> <span class="icon">&#9742;<strong>Phone:</strong></span> 021 245 8874</li>
              <li> <a href="mailto:info@snowlakebookings.com"><span class="icon">&#9993;<strong>Email:</strong></span> snowlakebookings.@gmailcom</a></li>
              <li><a href="http://localhost:8081/" target="_blank"><span class="icon">&#128279;<strong>Website:</strong> </span> www.Snowlake.com</a></li>
              <li><span class="icon">&#127968;<strong>Address:</strong> </span> 23 Bloom Snowlake 1245</li>
            </ul>
          </div>
        </div>
        <div class="contact-body">
          <img src="https://freedesignfile.com/upload/2016/12/Bride-holding-bouquet-Stock-Photo.jpg" width="250" alt="">
        </div>
      </div>
    </div>
  </div>
  </section>
  
</template>
<style scoped>
h2 {
  color: black;
  font-weight: bolder;
  text-shadow: black 6px 5px 20px;
}
.contact-box {
  background-color: beige;
  position: relative;
  top: 10px;
  height: 80vh;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 700px;
  padding: 30px;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.contact-section h2 u {
  text-decoration: underline;
}
.contact-content {
  flex: 6;
}
.contact-content ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  border-radius: 40%;
}
.contact-body {
  display: flex;
  margin: 10%;
  position: relative;
  bottom: 140px;
  left: 40%;
}
.details {
  position: relative;
  right: 40%;
  margin: 40px;
}
.small-image {
  max-width: 50px;
}
ul {
  position: relative;
  top: 30px;
}
li {
  margin-bottom: 10px;
}
.icon {
  margin-right: 10px;
}
</style>
import React from "react";

function AboutMe () {
    return (
<div class="container" id="me">
<div class="row">
  <div class="col-6">
    <div class="card" style="width: 70rem;">
      <div class="card-body">
          <h5 class="card-title">About Me</h5>
          <br></br>
          <figure>
              <img class="img-fluid float-left pr-3 pt-2" src="./img/ayla.jpeg" alt="profile picture" />
          </figure>
          <content class="clearfix">

              <p class="card-text">  I grew up in Los Osos California, a small town by the beach, from elementary to middle school I was home-schooled,
                this alternative education style allowed my parents to take me on trips instilling in me a love for travel at a young age. I’ve always been a naturally curious person comfortable getting outside 
                of my comfort zone, in college I spent a year living abroad in Hong Kong studying business and traveling. The experience was incredibly eye opening, I was able to connect with tons of like minded, 
                ambitious people who inspired me to work harder for what I wanted. After graduating from San Francisco State University in May of 2020 I went right back to school to learn coding at a UC Berkeley Full 
                Stack Web Development Bootcamp, I've become passonate about approaching programming challenges from different angles and collaborating with others to create 
                meaningful web applications, one of my favorite aspects of code is the ability to create something out of just an idea!
              </p>

          </content>
      </div>
  </div>
</div>
</div>
</div>
    )
}

export default AboutMe;
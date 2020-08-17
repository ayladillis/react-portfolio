import React from "react";
import "./style.css"

function AboutMe () {
  return (

    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">About</h1>
    <br></br>
    <div class="row">
    <div class="col">
      <figure class="figure">
        <img src="./ayla.jpeg" class="figure-img img-fluid rounded" alt="headshot" />
        <figcaption><strong>Nice to Meet You!</strong></figcaption>
        <figcaption class="figure-caption"> I graduated from San Francisco State University in May of 2020 I went right back to school to learn coding, I'm passonate about approaching programming challenges from different angles and collaborating with others to create 
                      meaningful web applications, one of my favorite aspects of code is the ability to create something out of just an idea!</figcaption>
      </figure>
    </div>
    <div class="col">
      skills
    </div>
  </div>
  </div>
</div>
  )
}
export default AboutMe;
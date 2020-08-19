import React from "react";
import "./style.css"

function AboutMe () {
  return (

    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">About</h1>
    <br></br>
    <div className="row">
    <div className="col">
      <figure className="figure">
        <img src= {process.env.PUBLIC_URL + "/img/ayla.jpg"} className="figure-img" alt="headshot" />
        <figcaption><strong>Nice to Meet You!</strong></figcaption>
        <figcaption className="figure-caption"> I graduated from San Francisco State University in May of 2020 I went right back to school to learn coding, I'm passonate about approaching programming challenges from different angles and collaborating with others to create 
                      meaningful web applications, one of my favorite aspects of code is the ability to create something out of just an idea!</figcaption>
      </figure>
    </div>
    <div className="col">
    </div>
  </div>
  </div>
</div>
  )
}
export default AboutMe;
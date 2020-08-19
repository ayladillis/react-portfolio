import React from "react";
import "./style.css";

function Jumbotron () {
    return (
    <div className="card bg-dark text-white">
    <img src="./img/sf.jpg" className="card-img" alt="..." />
    <div className="card-img-overlay">
    <h1 className="title"><strong>Ayla Dillis</strong></h1>
    <p className="card-text">Full Stack Web Developer <br/> Bay Area</p>
    </div>
    </div>
    )
}

export default Jumbotron;
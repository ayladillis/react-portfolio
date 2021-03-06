import React from "react";

function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link" href=" ">Home</a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#me">About</a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#blog">Blog</a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#contact" tabIndex="-1">Contact</a>
            </li>
        </ul>
        </div>
        </nav>
    )
}

export default Navbar;
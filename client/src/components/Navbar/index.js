import React from "react";

function Navbar (){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
            <a class="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item active">
            <a class="nav-link" href="#me">About Me</a>
            </li>
            <li class="nav-item active">
            <a class="nav-link" href="#contact" tabindex="-1">Contact</a>
            </li>
        </ul>
        </div>
        </nav>
    )
}

export default Navbar;
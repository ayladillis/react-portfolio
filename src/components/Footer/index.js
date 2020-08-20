import React from "react";

function Footer () {
    return (
        <div id="contact" className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Lets Talk!</h5>
          <p className="card-text">phone: (805) 458 - 8249 || email: aayladillis@gmail.com</p>

          <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="icon-block">
            <h5><a href="/assets/resume.pdf">Click here to go to my Resume</a></h5>
          </div>
        </div>
        <div className="col-sm">
          <div className="icon-block">
            <h5><a href={"https://github.com/ayladillis"}>See my Github!</a></h5>
          </div>
        </div>
        <div className="col-sm">
          <div className="icon-block">
              <h5><a href={"https://www.linkedin.com/in/ayladillis/"}>Visit my Linkedin</a></h5>
          </div>
        </div>
      </div>
    </div>


        </div>
        <div className="card-footer text-muted">
        2020 Ayla Dillis, All Rights Reserved
        </div>
      </div>
    )
}

export default Footer;
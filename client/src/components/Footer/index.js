import React from "react";

function Footer () {
    return (
        <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Lets Talk!</h5>
          <p className="card-text">phone: (805) 458 - 8249 || email: aayladillis@gmail.com</p>

          <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="icon-block">
            <h5><a href={"https://docs.google.com/document/d/10KTrWoi_lqT1ogBMu14DlecByneWXwqOW67q6kGi3HY/edit?usp=sharing"}>Click here to go to my Resume</a></h5>
          </div>
        </div>
        <div class="col-sm">
          <div class="icon-block">
            <h5><a href={"https://github.com/ayladillis"}>See my Github!</a></h5>
          </div>
        </div>
        <div class="col-sm">
          <div class="icon-block">
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
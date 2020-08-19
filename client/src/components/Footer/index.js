import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome"

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
            <a href="https://docs.google.com/document/d/10KTrWoi_lqT1ogBMu14DlecByneWXwqOW67q6kGi3HY/edit?usp=sharing">
              <h2>
                {/* <i id="resume" class="material-icons md-36">folder_open</i> */}
                {/* <FontAwesomeIcon icon={["far", "file-user"]} /> */}
                </h2>
                </a>
            <h5 class="center">Resume</h5>
          </div>
        </div>
        <div class="col-sm">
          <div class="icon-block">
            <a href="https://github.com/ayladillis">
              <h2 class="center black-text">
                {/* <i id="github" class="fa fa-github" style="font-size:45px"></i> */}
                  </h2>
                  </a>
            <h5 class="center">Github</h5>
          </div>
        </div>
        <div class="col-sm">
          <div class="icon-block">
            <a href="https://www.linkedin.com/in/ayladillis/">
              <h2 class="center black-text">
                {/* <i id="linkedin" class="fa fa-linkedin-square" style="font-size:45px"></i> */}
                </h2>
                </a>
            <h5 class="center">Linkedin</h5>
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
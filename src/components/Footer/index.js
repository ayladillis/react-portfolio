import React from "react";
import "./style.css";

function Footer () {
    return (
        <div id="contact" className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Lets Talk!</h5>
          <p className="card-text">phone: (805) 458 - 8249 || email: aayladillis@gmail.com</p>

          <div className="container">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div className="icon-block" style={{ margin: '10px' }}>
            <h5><a href="/assets/resume.pdf"><i className="fas fa-paperclip fa-2x" /></a></h5>
          </div>
          <div className="icon-block" style={{ margin: '10px' }}>
            <h5><a href={"https://github.com/ayladillis"}><i class="fab fa-github fa-2x" /></a></h5>
        </div>
          <div className="icon-block" style={{ margin: '10px' }}>
              <h5><a href={"https://www.linkedin.com/in/ayladillis/"}><i class="fab fa-linkedin fa-2x" /></a></h5>
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
import React from 'react';
import './style.css';

function Blog() {
  return (
    <div id="blog" className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Blog</h1>
        <br></br>
        <div className="card-group">
          <div className="card ml-2 mr-2">
            <img className="card-img-top" src={process.env.PUBLIC_URL + "/img/codecode.jpg"} alt="blog" />
            <div className="card-body">
              <h5 className="card-title">An Amateur Explains ‘.querySelector’</h5>
              <p className="card-text">My favorite thing about code is that any question you could ever have can be found with Google search, hardly any other profession...</p>
              <a class="blog" href="https://medium.com/@aayladillis/an-amateur-explains-quesryselector-977cc0daf009">Check it out!</a>
              <p className="card-text"><small className="text-muted">July, 5th 2020</small></p>
            </div>
          </div>
          <div className="card ml-2 mr-2">
            <img className="card-img-top" src={process.env.PUBLIC_URL + "/img/web-browsers.jpg"} alt="blog" />
            <div className="card-body">
              <h5 className="card-title">Battle of the Browsers</h5>
              <p className="card-text">Today ‘searching it online’ and ‘Googling it’ are virtually the same thing, Google is the most used and well-known web browser...</p>
              <a class="blog" href="https://medium.com/@aayladillis/battle-of-the-browsers-bdc0ae65f713">Click here</a>
              <p className="card-text"><small className="text-muted">August, 3rd 2020</small></p>
            </div>
          </div>
          <div className="card ml-2 mr-2">
            <img className="card-img-top" src="./codecode.jpg" alt="blog" />
            <div className="card-body">
              <h5 className="card-title">Last Project Blog</h5>
              <p className="card-text"> </p>
              <a class="blog" href="https://medium.com/@aayladillis/battle-of-the-browsers-bdc0ae65f713">Link to Blog</a>
              <p className="card-text"><small className="text-muted">September, 1st 2020</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
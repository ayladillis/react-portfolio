import React from 'react';

function Blog() {
    return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Blog</h1>
            <br></br>
            <div className="card-group">
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">An Amateur Explains ‘.querySelector’</h5>
      <p className="card-text">My favorite thing about code is that any question you could ever have can be found with Google search, hardly any other profession...</p>
      <p className="card-text"><small className="text-muted">July, 5th 2020</small></p>
    </div>
  </div>
  <br />
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Battle of the Browsers</h5>
      <p className="card-text">Today ‘searching it online’ and ‘Googling it’ are virtually the same thing, Google is the most used and well-known web browser...</p>
      <p className="card-text"><small className="text-muted">August, 3rd 2020</small></p>
    </div>
  </div>
  <br />
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>


        </div>
    </div>
    );
}

export default Blog;
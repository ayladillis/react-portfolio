import React, { Fragment } from "react";
import './style.css';

function PortfolioNav () {
    return (
    <Fragment>
        <div className="header waypoint" data-animation="slide-in-right">
          PROJECTS
        </div>
        <div
          className="header-bar waypoint"
          data-animation="slide-in-right"
          data-delay=".3s"
         />

        <div className="filter-wrap waypoint" data-animation="fade-in">
          <div className="flex row">
            <div className="filter" data-filter="all">ALL</div>
            <div className="filter" data-filter=".rails">RUBY/RAILS</div>
            <div className="filter" data-filter=".react">REACT-JS</div>
            <div className="filter" data-filter=".js">JAVASCRIPT</div>
          </div>
          <div className="float-bar">
            <div className="flex row">
              <div className="filter" data-filter="all">ALL</div>
              <div className="filter" data-filter=".rails">RUBY/RAILS</div>
              <div className="filter" data-filter=".react">REACT-JS</div>
              <div className="filter" data-filter=".js">JAVASCRIPT</div>
            </div>
          </div>
        </div>
    </Fragment>
    );
};

export default PortfolioNav;
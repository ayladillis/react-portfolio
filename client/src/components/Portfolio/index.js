import React from "react";
import PortfolioNav from "../PortfolioNav";
import PortfolioImg from "../PortfolioImg"

function Portfolio (){
    return (
    <section className="flex" id="portfolio">
        <PortfolioNav />
        <PortfolioImg />
    </section> 
    );
};

export default Portfolio;


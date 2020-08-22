/* global $ */
import React, { useEffect } from "react";
import "./style.css";
import { Button } from 'react-bootstrap';


function Carousel () {
    useEffect(() => {
        $('#recipeCarousel').carousel({
            interval: 10000
          })
          $('.carousel .carousel-item').each(function(){
              var minPerSlide = 3;
              var next = $(this).next();
              if (!next.length) {
              next = $(this).siblings(':first');
              }
              next.children(':first-child').clone().appendTo($(this));
              
              for (var i=0;i<minPerSlide;i++) {
                  next=next.next();
                  if (!next.length) {
                      next = $(this).siblings(':first');
                    }
                  
                  next.children(':first-child').clone().appendTo($(this));
                }
          });
    }, []);

    return (
        <div id="portfolio" className="container text-center my-3">
        <h2 className="font-weight-light">Portfolio</h2>
        <div className="row mx-auto my-auto">
            <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
                <div className="carousel-inner w-100" role="listbox">
                    <div className="carousel-item active">
                        <div className="col-md-4">
                            <div className="card card-body">
                                <img src="/img/note_taker.png" className="portfolio-img" alt="portfolio img" />
                                <h6>Note Taker</h6>
                                <p>This application can be used to write, save, and delete notes, Note Taker uses an express backend and save and retrieve note data from a JSON file.</p>                      
                                <div className="card-action">
                                <Button href="https://github.com/ayladillis/Note-Taker" variant="danger" style={{ margin: '5px' }}>GitHub</Button>  
                                <Button href="https://warm-brook-79560.herokuapp.com/" variant="danger" style={{ margin: '5px' }}>Deploy link</Button>                                                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-4">
                            <div className="card card-body">
                                <img src= {process.env.PUBLIC_URL + "/img/travel_bucketlist.png"} className="portfolio-img" alt="portfolio img" />
                                <h6>Travel Bucketlist</h6>
                                <p>The Travel Bucketlist app uses MySQL, Node, Express, Handlebars and a homemade ORM to run, Node and MySQL query and route data in the app, and Handlebars to generates the HTML.</p>
                                <div className="card-action">
                                <Button href="https://github.com/ayladillis/Travel-Bucketlist" variant="danger" style={{ margin: '5px' }}>GitHub</Button>  
                                <Button href="https://frozen-wildwood-92430.herokuapp.com/" variant="danger" style={{ margin: '5px' }}>Deploy link</Button>                                                        

                                </div>                        
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-4">
                            <div className="card card-body">
                                <img src= {process.env.PUBLIC_URL + "/img/employee_summary.png"} className="portfolio-img" alt="portfolio img" />
                                <h6>Employee Summary</h6>
                                <p>The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns.</p>
                                <div className="card-action">
                                <Button href="https://github.com/ayladillis/employee_summary" variant="danger" style={{ margin: '5px' }}>GitHub</Button>  
                                <Button href="https://ayladillis.github.io/employee_summary/" variant="danger" style={{ margin: '5px' }}>Deploy link</Button>                                                        

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-4">
                            <div className="card card-body">
                                <img src= {process.env.PUBLIC_URL + "/img/property_mover.png"} className="portfolio-img" alt="portfolio img" />
                                <h6>Property Mover</h6>
                                <p>Property Mover takes in an address that the user wants to map from as well as the maximum time they want to commute (by car) and how much they want to spend on housing. A map and listing of properties with there commute times is generated.</p>
                                <div className="card-action">
                                <Button href="https://github.com/ayladillis/Coding-Bootcamp-Project-1-Zillow-Maps-API-AD" variant="danger" style={{ margin: '5px' }}>GitHub</Button>  
                                <Button href="https://ayladillis.github.io/Coding-Bootcamp-Project-1-Zillow-Maps-API-AD/" variant="danger" style={{ margin: '5px' }}>Deploy link</Button>                                                        
                                </div>                        
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-4">
                            <div className="card card-body">
                                <img src= {process.env.PUBLIC_URL + "/img/day_planner.png"} className="portfolio-img" alt="portfolio img" />
                                <h6>Day Planner</h6>
                                <p>This app implements JQuery and Javascript to input notes to a 8 hour schedule, a time API to display the current date and uses local stroage to save the data and then pulling it back out when the browser is refreshed. </p>
                                <div className="card-action">
                                <Button href="https://github.com/ayladillis/third-party-APIs" variant="danger" style={{ margin: '5px' }}>GitHub</Button>  
                                <Button href="https://ayladillis.github.io/third-party-APIs/" variant="danger" style={{ margin: '5px' }}>Deploy link</Button>                                                        
                                </div>                        
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-4">
                            <div className="card card-body">
                                <img src= {process.env.PUBLIC_URL + "/img/good-readme.png"} className="portfolio-img" alt="portfolio img" />
                                <h6>Readme Generator</h6>
                                <p>Create an open source project that makes a quality README anyone can use, in will include a title, description, table of contents, instillation, usage, license, contributing, tests, questions and at least one badge. </p>
                                <div className="card-action">
                                <Button href="https://github.com/ayladillis/Good-README" variant="danger" style={{ margin: '5px' }}>GitHub</Button>  
                                <Button href="https://ayladillis.github.io/Good-README/" variant="danger" style={{ margin: '5px' }}>Deploy link</Button>                                                        
                                </div>                        
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-4">
                            <div className="card card-body">
                                <img src= {process.env.PUBLIC_URL + "/img/book-search.png"} className="portfolio-img" alt="portfolio img" />
                                <h6>'Google' Book Search</h6>
                                <p>A full stack app built with React for users to search for books then see their results in either Google books or a saved page. </p>
                                <div className="card-action">
                                <Button href="https://github.com/ayladillis/book-search" variant="danger" style={{ margin: '5px' }}>GitHub</Button>  
                                <Button href="https://protected-springs-48750.herokuapp.com/search" variant="danger" style={{ margin: '5px' }}>Deploy link</Button>                                                        
                                </div>                        
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img src= {process.env.PUBLIC_URL + "/img/fitness-app-img.png"} className="portfolio-img" alt="portfolio img" />
                            <h6>Fitness App</h6>
                            <p>This app takes in user input such as exercise type, name, sets and reps and calculates workout duration, pounds lifted, and exercises performed.</p>
                            <div className="card-action">
                                <Button href="https://github.com/ayladillis/fitness-app" variant="danger" style={{ margin: '5px' }}>GitHub</Button>  
                                <Button href="https://cryptic-tundra-13999.herokuapp.com/" variant="danger" style={{ margin: '5px' }}>Deploy link</Button>                                                        
                            </div>                        
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img src= {process.env.PUBLIC_URL + "/img/clicky-game.png"} className="portfolio-img" alt="portfolio img" />
                            <h6>Clicky Game</h6>
                            <p>This is a memory game where to goal is to not click on any one pictures twice, score is kept by increasing when the user correctly selects different images and decreasing when the user clicks on one image twice. </p>
                            <div className="card-action">
                            <Button href="https://github.com/ayladillis/clicky-game" variant="danger" style={{ margin: '5px' }}>GitHub</Button>  
                            <Button href="https://ayladillis.github.io/clicky-game/" variant="danger" style={{ margin: '5px' }}>Deploy link</Button>                                                        
                            </div>                        
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="col-md-4">
                    <div className="card card-body">
                        <img src= {process.env.PUBLIC_URL + "/img/employee-directory.png"} className="portfolio-img" alt="portfolio img" />
                        <h6>Employee Directory</h6>
                        <p>This app was created with React, it allows the user to search for employees by name as well as sort emails alphabetically. Employee images, names, emails and phone numers are displayed.
                        </p>
                        <div className="card-action">
                            <Button href="https://github.com/ayladillis/employee-directory" variant="danger" style={{ margin: '5px' }}>GitHub</Button>  
                            <Button href="https://ayladillis.github.io/employee-directory/" variant="danger" style={{ margin: '5px' }}>Deploy link</Button>                                                        
                        </div>                        
                    </div>
                </div>
            </div>

                </div>
                <a className="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        </div>
    );
};

export default Carousel;
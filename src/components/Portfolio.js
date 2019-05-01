import React from "react";
import "./Portfolio.css";
import GreenStreet from "../images/green-street.png";
import Hangman from "../images/hangman.png";
import OurHouse from "../images/our_house.png";
import DoodlePoots from "../images/doodle_poots.png";
import Bamazon from "../images/bamazon.png";
import TrainScheduler from "../images/train_sched.png";

function Portfolio() {
    return (
        <div className="container">
            <div className="row main-row">
                <div className="col-md-12">
                    <h1 className="header">Portfolio</h1>
                    <hr />
                </div>
                <div className="col-md-12 site-col">
                    <div className="site-div">
                        <img className="site-img" src={GreenStreet} alt="green street" />
                        <div className="info-overlay">
                            <h3 className="info-name">Green Street</h3>
                            <hr />
                            <p className="info"><span className="bold">Role:</span> Original Concept, Front-End, Controllers</p>
                            <p className="info"><span className="bold">Overview:</span> An app that allows gardeners to connect to form tiny little front yard farmer's markets and consumers to find the market's homepage.</p>
                            <p className="info"><span className="bold">Technologies:</span> MERN (MongoDB, Express, React and Node.js)</p>
                            <div className="info right">
                                <a className="ext-link" target="_blank" href="https://github.com/nickila/green-street">Github Repo</a> &nbsp; <a className="ext-link" target="_blank" href="http://green-street.herokuapp.com/">Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row main-row">
                <div className="col-md-12 site-col">
                    <div className="site-div">
                        <img className="site-img" src={Hangman} alt="hangman" />
                        <div className="info-overlay">
                            <h3 className="info-name">Hangman</h3>
                            <hr />
                            <p className="info"><span className="bold">Role: </span> Sole Developer</p>
                            <p className="info"><span className="bold">Overview:</span> A classic arcade style game of Hangman. Enter letters until you win or lose and keep track of your score along the way.</p>
                            <p className="info"><span className="bold">Technologies:</span> HTML, CSS & JavaScript</p>
                            <div className="info right">
                                <a className="ext-link" target="_blank" href="https://github.com/nickila/Word-Guess-Game">Github Repo</a> &nbsp; <a className="ext-link" target="_blank" href="https://nickila.github.io/Word-Guess-Game/">Website</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row main-row">
                <div className="col-md-12 site-col">
                    <div className="site-div">
                        <img className="site-img" src={OurHouse} alt="our house" />
                        <div className="info-overlay">
                            <h3 className="info-name">Our House</h3>
                            <hr />
                            <p className="info"><span className="bold">Role:</span> Front End & APIs</p>
                            <p className="info"><span className="bold">Overview:</span> Enter your address to find your local and federal representatives. Find their contact information as well as links to their webpages.</p>
                            <p className="info"><span className="bold">Technologies:</span> JavaScript, jQuery, Google Civics API, Google Maps API, Animate.css, HTML, CSS, Bootstrap</p>
                            <div className="info right">
                                <a className="ext-link" target="_blank" href="https://github.com/nickila/Our_House">Github Repo</a> &nbsp; <a className="ext-link" target="_blank" href="http://nickila.github.io/Our_House">Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row main-row">
                <div className="col-md-12 site-col">
                    <div className="site-div">
                        <img className="site-img" src={DoodlePoots} alt="doodle poots" />
                        <div className="info-overlay">
                            <h3 className="info-name">Doodle Poots</h3>
                            <hr />
                            <p className="info"><span className="bold">Role:</span> Sole Developer</p>
                            <p className="info"><span className="bold">Overview:</span> A take on a classic role-playing game where the characters have a special attack move. This game is truly a gas!</p>
                            <p className="info"><span className="bold">Technologies:</span> HTML, CSS, JavaScript, jQuery & Bootstrap</p>
                            <div className="info right">
                                <a className="ext-link" target="_blank" href="https://github.com/nickila/unit-4-game">Github Repo</a> &nbsp; <a className="ext-link" target="_blank" href="http://nickila.github.io/unit-4-game">Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row main-row">
                <div className="col-md-12 site-col">
                    <div className="site-div">
                        <img className="site-img" src={Bamazon} alt="bamazon" />
                        <div className="info-overlay">
                            <h3 className="info-name">Bamazon</h3>
                            <hr />
                            <p className="info"><span className="bold">Role:</span> Sole Developer</p>
                            <p className="info"><span className="bold">Overview:</span> This app uses Node.js to track inventory, adjust inventory, add products, sort by department, change prices and track sales.</p>
                            <p className="info"><span className="bold">Technologies:</span> Node.js, JavaScript, MySQL, Sequelize</p>
                            <div className="info right">
                                <a className="ext-link" target="_blank" href="https://github.com/nickila/bamazon">Github Repo</a> &nbsp; <a className="ext-link" target="_blank" href="https://www.youtube.com/watch?v=wDEec8nOevU&feature=youtu.be">Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row main-row">
                <div className="col-md-12 site-col">
                    <div className="site-div">
                        <img className="site-img" src={TrainScheduler} alt="train scheduler" />
                        <div className="info-overlay">
                            <h3 className="info-name">Train Scheduler</h3>
                            <hr />
                            <p className="info"><span className="bold">Role:</span> Sole Developer</p>
                            <p className="info"><span className="bold">Overview:</span> A user can see when each train in the database will be to the station in real time. A registered user can enter a new train with a set frequency.</p>
                            <p className="info"><span className="bold">Technologies:</span> Firebase, JavaScript, jQuery, HTML, CSS and Bootstrap</p>
                            <div className="info right">
                                <a className="ext-link" target="_blank" href="https://github.com/nickila/train-scheduler">Github Repo</a> &nbsp; <a className="ext-link" target="_blank" href="https://nickila.github.io/train-scheduler/">Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <br />
            <br />
        </div>
    )
}

export default Portfolio;
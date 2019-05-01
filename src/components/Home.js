import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Profile from "../images/profile1.png";
import ProfileColor from "../images/profile2.png";

function Home() {
    return (
        <div className="container">
            <div className="row main-row">
                <div className="col-md-8">
                    <h1 className="header">Brian Nickila</h1>
                    <p className="about"><span className="about-bold">Front-End Web Developer</span> creating apps and websites in a creative and user-friendly style in St. Paul, Minnesota. I have a bachelor of fine arts degree from the University of Wisconsin-Stevens Point and a certificate in full-stack web development from the University of Minnesota. When I'm not writing code, you might find me working on <Link className="about-bold link" to="/animation">animation</Link>, playing guitar, gardening or camping. Please check out my <Link className="about-bold link" to="/portfolio">portfolio</Link> and feel free to <a href="mailto:brian.nickila@gmail.com" className="about-bold link" to="/contact">contact</a> me for any reason. I'd love to hear from you.</p>
                    <p className="tech"><span className="about-bold">Technologies:</span> React, JavaScript, HTML, CSS, jQuery, Bootstrap, MongoDB, MySQL, Express, Node.js, Sequelize, Mongoose, Photoshop, Illustrator & Flash</p>
                </div>
                <div className="col-md-4 img-div">
                    <img className="profile" src={Profile} alt="brian nickila sketch" />
                    <div className="overlay">
                        <img className="color-profile" src={ProfileColor} alt="brian nickila colored sketch" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;
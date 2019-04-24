import React from "react";
import { Link } from "react-router-dom";

function Name() {
    return (
        <div className="container">
            <div className="row main-row">
                <div className="col-md-8">
                    <h1 className="name">Brian Nickila</h1>
                    <p className="about"><span className="bold">Front-End Web Developer</span> creating apps and websites in a creative and user-friendly style in St. Paul, Minnesota. I have a bachelor of fine arts degree from the University of Wisconsin-Stevens Point and a certificate in full-stack web development from the University of Minnesota. When I'm not writing code, you might find me working on <Link className="bold link" to="/animation">animation</Link>, playing guitar, gardening or camping. Please check out my <Link className="bold link" to="/portfolio">portfolio</Link> and feel free to <Link className="bold link" to="/contact">contact</Link> me for any reason. I'd love to hear from you.</p>
                    <p className="tech"><span className="bold">Technologies:</span> React, JavaScript, HTML, CSS, jQuery, Bootstrap, MongoDB, MySQL, Express, Node.js, Sequelize, Mongoose, Photoshop, Illustrator & Flash</p>
                </div>
                <div className="col-md-4 img-div">
                    <img className="profile" src="images/profile1.png" />
                    <div className="overlay">
                        <img className="color-profile" src="images/profile2.png" />
                    </div>
                    {/* <img className="profile" src="images/profile1.png"
                        onMouseOver={e => (e.currentTarget.src = "images/profile2.png")}
                        onMouseOut={e => (e.currentTarget.src = "images/profile1.png")} /> */}
                </div>
            </div>
            {/* <div className="row bottom-row">
                <div className="col-md-10">
                    <h3 className="techHeader">Technologies</h3>
                    <hr />
                    <p className="tech">React &nbsp; JavaScript &nbsp; HTML &nbsp; CSS &nbsp; jQuery &nbsp; Bootstrap &nbsp; MongoDB &nbsp; MySQL &nbsp; Express &nbsp; Node.js &nbsp; Sequelize &nbsp; Mongoose &nbsp; Photoshop &nbsp; Illustrator &nbsp; Flash</p>
                </div>
            </div> */}
        </div >
    )
}

export default Name;
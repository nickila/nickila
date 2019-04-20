import React from "react";

function Name() {
    return (
        <div className="container">
            <div className="row main-row">
                <div className="col-md-8">
                    <h1 className="name">Brian Nickila</h1>
                    <p className="about"><span className="bold">Full-Stack Web Developer</span> creating apps and websites in a creative and user-friendly style in St. Paul, Minnesota. I have a bachelor of fine arts degree from the University of Wisconsin-Stevens Point and a certificate in full-stack web development from the University of Minnesota. When I'm not writing code, you might find me animating, playing guitar, gardening or camping. Please check out my <span className="bold link">portfolio</span> and feel free to <span className="bold link">contact</span> me for any reason. I'd love to hear from you.</p>
                </div>
                <div className="col-md-4">
                    <img className="profile" src="images/profile1sm.png" />
                </div>
            </div>
        </div>
    )
}

export default Name;
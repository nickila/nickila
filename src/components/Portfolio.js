import React from "react";

function Portfolio() {
    return (
        <div className="container">
            <div className="row main-row">
                <div className="col-md-12 carousel-div">
                    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval="4000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 img-div">
                                            <img src="images/hangman.png" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="col-md-3 info-div">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="4000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 img-div">
                                            <img src="images/green-street.png" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="col-md-3 info-div">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="4000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 img-div">
                                            <img src="images/our_house.png" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="col-md-3 info-div">

                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="carousel-item" data-interval="4000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 img-div">

                                            <img src="images/doodle_poots.png" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="col-md-3 info-div">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="4000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 img-div">

                                            <img src="images/bamazon.png" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="col-md-3 info-div">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="4000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 img-div">

                                            <img src="images/train_sched.png" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="col-md-3 info-div">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="4000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 img-div">

                                            <img src="images/burger.png" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="col-md-3 info-div">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
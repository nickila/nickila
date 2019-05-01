import React, { Component } from "react";
import "./Animation.css";

import puffies from "../animation/puffies.jpg";
import chimney from "../animation/chimneysquare.jpg";
import facedoh from "../animation/face-doh.jpg";
import dog from "../animation/dogSQ.jpg";
import gnome from "../animation/gnomejump.jpg";
import bird from "../animation/bird.jpg";
import name from "../animation/name.jpg";
import monter from "../animation/monter.jpg";
import cupcake from "../animation/cupcake.jpg";

import puffiesGif from "../animation/newpuff.gif";
import chimneyGif from "../animation/chimneysquare.gif";
import facedohGif from "../animation/face-doh.gif";
import dogGif from "../animation/dogSQ.gif";
import monterGif from "../animation/monter.gif";
import birdGif from "../animation/bird.gif";
import gnomeGif from "../animation/gnome2.gif";
import nameGif from "../animation/nameline2.gif";
import cupcakeGif from "../animation/cupcakescream.gif";

class Animation extends Component {

    state = {
        gif: monterGif
    }

    getGif = e => {
        e.preventDefault()
        let value = e.target.name
        console.log(value)
        this.setState({
            gif: value
        })
    }
    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-md-7">
                        <div className="container">
                            <div className="row main-row animation-row">
                                <h1 className="header">Animation</h1>
                            </div>
                            <div className='row'>
                                <div>
                                    <img className="col-md-6 stage" src={this.state.gif} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="container">
                            <div className="row deck-row">
                                <div className="col-4 gif-col">
                                    <img className="deck-img" src={facedoh} name={facedohGif} onClick={this.getGif} alt="face-doh gif" />
                                </div>
                                <div className="col-4 gif-col">
                                    <img className="deck-img" src={chimney} name={chimneyGif} onClick={this.getGif} alt="chimney sweater gif" />
                                </div>
                                <div className="col-4 gif-col">
                                    <img className="deck-img" src={dog} name={dogGif} onClick={this.getGif} alt="dog cartoon gif" />
                                </div>
                                <div className="col-4 gif-col">
                                    <img className="deck-img" src={bird} name={birdGif} onClick={this.getGif} alt="bird flying gif" />
                                </div>
                                <div className="col-4 gif-col">
                                    <img className="deck-img" src={puffies} onClick={this.getGif} name={puffiesGif}
                                        alt="puffy and hat gif" />
                                </div>
                                <div className="col-4 gif-col">
                                    <img className="deck-img" src={gnome} name={gnomeGif} onClick={this.getGif} alt="gnome jumping gif" />
                                </div>
                                <div className="col-4 gif-col">
                                    <img className="deck-img" src={name} name={nameGif} onClick={this.getGif} alt="brian nickila gif" />
                                </div>
                                <div className="col-4 gif-col">
                                    <img className="deck-img" src={monter} name={monterGif} onClick={this.getGif} alt="monter with sword" />
                                </div>
                                <div className="col-4 gif-col">
                                    <img className="deck-img" src={cupcake} name={cupcakeGif} onClick={this.getGif} alt="cupcake gif" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Animation;
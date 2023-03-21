import '../../dist/css/home.css';
import slide1 from '../../dist/img/slide1.webp';
import slide2 from '../../dist/img/slide2.webp';
import slide3 from '../../dist/img/slide3.webp';
import React from "react";

const Home = () => {

    return (
        <div className="home-wrapper">
            <div className="container">
                <div className="home-block">
                    <div className="home-slide">
                        <img className="slide-img wow zoomIn" src={slide1} alt="slide1"/>
                        <span className="square-orange"></span>
                    </div>
                    <div className="home-info">
                        <span className="vertical-border"></span>
                        <div className="info-text">
                            <h1 className="wow slideInUp">Unlimited movies, TV shows, and more</h1>
                            <h2 className="wow slideInUp">Watch anywhere. Cancel anytime</h2>
                        </div>
                    </div>
                </div>

                <div className="home-block">
                    <div className="home-info">
                        <span className="vertical-border-left"></span>
                        <div className="info-text">
                            <h1 className="wow slideInUp">Enjoy on your TV</h1>
                            <h2 className="wow slideInUp">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more</h2>
                        </div>
                    </div>
                    <div className="home-slide">
                        <span className="square-grey1"></span>
                        <img className="slide-img wow zoomIn" src={slide2} alt="slide2"/>
                        <span className="square-grey2"></span>
                    </div>
                </div>

                <div className="home-block">
                    <div className="home-slide">
                        <img className="slide-img wow zoomIn" src={slide3} alt="slide3"/>
                        <span className="square-orange"></span>
                    </div>
                    <div className="home-info">
                        <span className="vertical-border"></span>
                        <div className="info-text">
                            <h1 className="wow slideInUp">Download your shows to watch offline</h1>
                            <h2 className="wow slideInUp">Save your favorites easily and always have something to watch</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
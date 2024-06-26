import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-btn">Read More</div>
                        <div className="banner-btn v2">Shop Now</div>
                    </div>
                </div>
                <div className="img-div">
                <img className="banner-img" src={BannerImg} alt="banner" />
                </div>  
            </div>          
        </div>

    );
};

export default Banner;
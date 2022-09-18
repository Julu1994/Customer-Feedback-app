import "./home.scss";
import React from "react";
import { ImHappy, ImAngry, ImWink, ImSad, ImNeutral } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Home = () => {
    return (
        <div className="home">
            <div className="home-nav">
                <GiHamburgerMenu
                    size={25}
                    color="#1c2841"
                    style={{ cursor: "pointer" }}
                />
            </div>
            <div className="home-emoji">
                <button className="home-btn">
                    <ImAngry size={90} color={"#FF0000"} />
                    <p>Terrible</p>
                </button>
                <button className="home-btn">
                    <ImSad size={90} color={"#FF6347"} />
                    <p>Bad</p>
                </button>
                <button className="home-btn">
                    <ImNeutral size={90} color={"#FFD700"} />
                    <p>Meh</p>
                </button>
                <button className="home-btn">
                    <ImHappy size={90} color={"#00FF00"} />
                    <p>Good</p>
                </button>
                <button className="home-btn">
                    <ImWink size={90} color={"#32CD32"} />
                    <p>Excellent</p>
                </button>
            </div>
        </div>
    );
};

export default Home;

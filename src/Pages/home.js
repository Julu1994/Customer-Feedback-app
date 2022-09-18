import "./home.scss";
import React from "react";
import { ImHappy, ImAngry, ImWink, ImSad, ImNeutral } from "react-icons/im";

const Home = () => {
    return (
        <div className="home">
            <div className="home-emoji">
                <button className="home-btn">
                    <ImAngry size={90} color={"#FF0000"} />
                </button>
                <button className="home-btn">
                    <ImSad size={90} color={"#FF6347"} />
                </button>
                <button className="home-btn">
                    <ImNeutral size={90} color={"#FFD700"} />
                </button>
                <button className="home-btn">
                    <ImHappy size={90} color={"#00FF00"} />
                </button>
                <button className="home-btn">
                    <ImWink size={90} color={"#32CD32"} />
                </button>
            </div>
        </div>
    );
};

export default Home;

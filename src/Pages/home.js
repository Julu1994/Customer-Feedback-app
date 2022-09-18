import "./home.scss";
import React from "react";
import { ImHappy, ImAngry, ImWink, ImSad } from "react-icons/im";

const Home = () => {
    return (
        <div className="home">
            <div className="home-emoji">
                <button className="home-btn">
                    <ImHappy size={90} color={"red"} />
                </button>
                <button className="home-btn">
                    <ImAngry size={90} color={"red"} />
                </button>
                <button className="home-btn">
                    <ImWink size={90} color={"red"} />
                </button>
                <button className="home-btn">
                    <ImSad size={90} color={"red"} />
                </button>
            </div>
        </div>
    );
};

export default Home;

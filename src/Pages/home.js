import "./home.scss";
import React from "react";
import { ImHappy, ImAngry, ImWink, ImSad, ImNeutral } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Home = () => {
    const [terrible, setTerrible] = React.useState(0);
    const [bad, setBad] = React.useState(0);
    const [meh, setMeh] = React.useState(0);
    const [good, setGood] = React.useState(0);
    const [excellent, setExcellent] = React.useState(0);

    const terribleHandler = () => {
        setTerrible((value) => value + 1);
    };
    const badHandler = () => {
        setBad((value) => value + 1);
    };
    const mehHandler = () => {
        setMeh((value) => value + 1);
    };
    const goodHandler = () => {
        setGood((value) => value + 1);
    };
    const excellentHandler = () => {
        setExcellent((value) => value + 1);
    };
    console.log(terrible, "terrible");
    console.log(bad, "bad");
    console.log(meh, "meh");
    console.log(good, "good");
    console.log(excellent, "excellent");
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
                <button className="home-btn" onClick={terribleHandler}>
                    <ImAngry size={90} color={"#FF0000"} />
                    <p>Terrible</p>
                </button>
                <button className="home-btn" onClick={badHandler}>
                    <ImSad size={90} color={"#FF6347"} />
                    <p>Bad</p>
                </button>
                <button className="home-btn" onClick={mehHandler}>
                    <ImNeutral size={90} color={"#FFD700"} />
                    <p>Meh</p>
                </button>
                <button className="home-btn" onClick={goodHandler}>
                    <ImHappy size={90} color={"#00FF00"} />
                    <p>Good</p>
                </button>
                <button className="home-btn" onClick={excellentHandler}>
                    <ImWink size={90} color={"#32CD32"} />
                    <p>Excellent</p>
                </button>
            </div>
        </div>
    );
};

export default Home;

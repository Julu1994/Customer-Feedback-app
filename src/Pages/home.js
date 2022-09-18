import "./home.scss";
import React from "react";
import { ImHappy, ImAngry, ImWink, ImSad, ImNeutral } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { terribleActions } from "../Redux/Features/terribleSlice";

const Home = () => {
    const dispatch = useDispatch();
    const sl = useSelector((state) => state.terrible.terribleCount);
    console.log(sl, "terrible");
    const terribleHandler = () => {
        dispatch(terribleActions.terribleIncriment());
    };
    const badHandler = () => {};
    const mehHandler = () => {};
    const goodHandler = () => {};
    const excellentHandler = () => {};
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

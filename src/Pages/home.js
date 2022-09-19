import "./home.scss";
import React from "react";
import { ImHappy, ImAngry, ImWink, ImSad, ImNeutral } from "react-icons/im";
import { ImShield } from "react-icons/im";
import { useDispatch } from "react-redux";
import { terribleActions } from "../Redux/Features/terribleSlice";
import { Link } from "react-router-dom";
import { badActions } from "../Redux/Features/badSlice";
import { mehActions } from "../Redux/Features/mehSlice";
import { goodActions } from "../Redux/Features/goodSlice";
import { excellentActions } from "../Redux/Features/excellentSlice";
import toast from "react-hot-toast";

const Home = () => {
    const dispatch = useDispatch();

    const terribleHandler = () => {
        dispatch(terribleActions.terribleIncriment());
        toast.success("Deep apology for your experience 😥 ");
    };
    const badHandler = () => {
        dispatch(badActions.badIncrement());
        toast.success("Sorry for your inconvenience 😞 ");
    };
    const mehHandler = () => {
        dispatch(mehActions.mehIncrement());
        toast.success("Hope we will make it exciting next time 😊 ");
    };
    const goodHandler = () => {
        dispatch(goodActions.goodIncrement());
        toast.success("We are so happy to serve you well 😄 ");
    };
    const excellentHandler = () => {
        dispatch(excellentActions.excellentIncrement());
        toast.success("We are as delighted as you 😉 ");
    };
    return (
        <div className="home">
            <div className="home-nav">
                <Link to="/admin">
                    <ImShield
                        size={25}
                        color="#1c2841"
                        style={{ cursor: "pointer" }}
                    />
                </Link>
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

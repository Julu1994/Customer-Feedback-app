// Import necessary dependencies
import "./home.scss";
import React, { useState, useEffect } from "react";
import { AnyAction } from "redux";
import { ImHappy, ImAngry, ImWink, ImSad, ImNeutral, ImShield } from "react-icons/im";
import { useDispatch } from "react-redux";
import { terribleActions } from "../Redux/Features/terribleSlice";
import { badActions } from "../Redux/Features/badSlice";
import { mehActions } from "../Redux/Features/mehSlice";
import { goodActions } from "../Redux/Features/goodSlice";
import { excellentActions } from "../Redux/Features/excellentSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

// Custom hook for device width
const useDeviceWidth = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setDeviceWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceWidth < 688;
};

interface EmojiButtonProps {
  color: string;
  label: string;
  IconComponent: React.ComponentType<{ size: number; color: string }>;
  onClick: () => void;
}

const EmojiButton: React.FC<EmojiButtonProps> = ({ label, IconComponent, onClick, color }) => (
  <button aria-label={`Rate as ${label}`} className="home-btn" onClick={onClick}>
    <IconComponent size={90} color={color} />
    <p>{label}</p>
  </button>
);

interface FeedbackOption {
  label: string;
  IconComponent: React.ComponentType<{ size: number; color: string }>;
  action: () => AnyAction;
  color: string;
  toastMessage: string;
  toastType: "success" | "error";
}

const Home: React.FC = () => {
  const isSmallScreen = useDeviceWidth();
  const dispatch = useDispatch();

  const feedbackOptions: FeedbackOption[] = [
    {
      label: "Terrible",
      IconComponent: ImAngry,
      action: terribleActions.terribleIncriment,
      color: "#FF0000",
      toastMessage: "Deep apology for your experience 😥",
      toastType: "success"
    },
    {
      label: "Bad",
      IconComponent: ImSad,
      action: badActions.badIncrement,
      color: "#FF6347",
      toastMessage: "Sorry for your inconvenience 😞",
      toastType: "success"
    },
    {
      label: "Meh",
      IconComponent: ImNeutral,
      action: mehActions.mehIncrement,
      color: "#FFD700",
      toastMessage: "Hope we will make it exciting next time 😊",
      toastType: "success"
    },
    {
      label: "Good",
      IconComponent: ImHappy,
      action: goodActions.goodIncrement,
      color: "#00FF00",
      toastMessage: "We are so happy to serve you well 😄",
      toastType: "success"
    },
    {
      label: "Excellent",
      IconComponent: ImWink,
      action: excellentActions.excellentIncrement,
      color: "#32CD32",
      toastMessage: "We are as delighted as you 😉",
      toastType: "success"
    },
  ];

const handleButtonClick = (action: () => AnyAction, message: string, type: "success" | "error") => {
  dispatch(action());

  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    };
 }

  return (
    <div>
      {isSmallScreen ? (
        <div className="warning">
          <h3 className="warning-header">
            This app hasn't been designed for small screens!!
          </h3>
        </div>
      ) : (
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
          <h1 className="home-header">
            How did you like our service ?
          </h1>

          <div className="home-emoji">
            {feedbackOptions.map(({ label, IconComponent, action, color, toastMessage, toastType }) => (
              <EmojiButton 
                key={label}
                label={label}
                color={color}
                IconComponent={IconComponent}
                onClick={() => handleButtonClick(action, toastMessage, toastType)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;


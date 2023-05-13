import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import "./admin.scss";

import { RootState } from '../Redux/store';

const Admin: React.FC = () => {
    const terrible = useSelector((state: RootState) => state.terrible.terribleCount);
    const bad = useSelector((state: RootState) => state.bad.badCount);
    const meh = useSelector((state: RootState) => state.meh.mehCount);
    const good = useSelector((state: RootState) => state.good.goodCount);
    const excellent = useSelector((state: RootState) => state.excellent.excellentCount);
    
    const options = {
        series: [excellent, good, meh, terrible, bad],
        labels: ["Excellent", "Good", "Meh", "Terrible", "bad"],
        colors: ["#006400", "#00FF00", "#FFD700", "#FF0000", "#FF4500"],
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            fontSize: "1rem",
                            color: "#2F4F4F",
                        },
                    },
                },
            },
        },
    };
    const series = [excellent, good, meh, terrible, bad];

    return (
        <>
            <div className="icon">
                <Link to="/" style={{ color: "#2F4F4F" }}>
                    <IoHome size={35} />
                </Link>
            </div>
            <div className="admin">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="100%"
                    height={300}
                />
            </div>
            <div className="emoji">
                <div className="emoji-main">
                    <span className="emoji-icon ">😡 </span>
                    <span className="emoji-badge bg-red">{terrible}</span>
                </div>
                <div className="emoji-main">
                    <span className="emoji-icon">🙁 </span>
                    <span className="emoji-badge bg-orange">{bad}</span>
                </div>
                <div className="emoji-main">
                    <span className="emoji-icon">😊 </span>
                    <span className="emoji-badge bg-yellow">{meh}</span>
                </div>
                <div className="emoji-main">
                    <span className="emoji-icon">😊 </span>
                    <span className="emoji-badge bg-lime">{good}</span>
                </div>
                <div className="emoji-main">
                    <span className="emoji-icon ">😉 </span>
                    <span className="emoji-badge bg-green">{excellent}</span>
                </div>
            </div>
        </>
    );
};

export default Admin;

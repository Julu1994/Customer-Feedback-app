import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import "./admin.scss";
const Admin = () => {
    const terrible = useSelector((state) => state.terrible.terribleCount);
    const bad = useSelector((state) => state.bad.badCount);
    const meh = useSelector((state) => state.meh.mehCount);
    const good = useSelector((state) => state.good.goodCount);
    const excellent = useSelector((state) => state.excellent.excellentCount);
    const options = {
        labels: ["Excellent", "Good", "Meh", "Terrible", "bad"],
        colors: ["#006400", "#00FF00", "#FFD700", "#FF0000", "#FF4500"],
    };
    const series = [excellent, good, meh, terrible, bad];

    return (
        <div className="admin">
            <Chart
                options={options}
                series={series}
                type="donut"
                width="100%"
                height={300}
            />
        </div>
    );
};

export default Admin;

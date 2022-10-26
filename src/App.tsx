import "./App.css";
import Home from "./Pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Pages/admin";
import React from "react";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

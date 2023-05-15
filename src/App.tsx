import "./App.css";
import Home from "./Pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Pages/admin";
import React from "react";
import Login from "./Pages/login/login";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

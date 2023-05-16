import "./App.css";
import Home from "./Pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Pages/admin";
import React from "react";
import Login from "./Pages/login/login";
import SignUp from "./Pages/signup/signup";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

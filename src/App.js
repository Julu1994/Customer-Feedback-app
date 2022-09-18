import "./App.css";
import Home from "./Pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Pages/admin";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/input";
import Compress from "./components/single_input";
import Login from "./components/sign-in";
import Signup from "./components/sign-up";
import Home from "./components/Landingpage/Home";
import Four04 from "./components/404";
import About from "./components/about";
import Contact from "./components/contactus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Compress" element={<Compress />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        
        <Route path="*" element={<Four04 />} />
      </Routes>
    </Router>
  );
}

export default App;

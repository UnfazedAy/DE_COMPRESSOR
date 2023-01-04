import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Input from "./components/input";
import Login from "./components/sign-in";
import Signup from "./components/sign-up";
import Home from "./components/Landingpage/Home";
import Four04 from "./components/404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/input" element={<Input />} />
        
        <Route path="*" element={<Four04 />} />
      </Routes>
    </Router>
  );
}

export default App;

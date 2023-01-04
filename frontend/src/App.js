import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Input from "./components/input";
import Login from "./components/sign-in";
import Signup from "./components/sign-up";
import Home from "./components/Landingpage/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/input" element={<Input />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Four404 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

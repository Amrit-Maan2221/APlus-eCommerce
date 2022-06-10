import './App.css';
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/" element={<div>Welcome to APlus</div>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;

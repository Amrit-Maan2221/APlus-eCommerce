import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';

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

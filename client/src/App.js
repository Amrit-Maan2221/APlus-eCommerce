import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Cart from "./pages/cart";

function App() {
	const user = null;
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route
						path="/test"
						element={
							user ? (
								<div>This is a test Route</div>
							) : (
								<Navigate to="/login" />
							)
						}
					/>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;

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
import { useSelector } from "react-redux";

function App() {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route
						path="/login"
						element={!user ? <Login /> : <Navigate to="/" />}
					/>
					<Route
						path="/register"
						element={!user ? <Register /> : <Navigate to="/" />}
					/>
					<Route
						path="/cart"
						element={user ? <Cart /> : <Navigate to="/login" />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;

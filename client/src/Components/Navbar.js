import React from "react";
import "./Navbar.css";
import { Search, ShoppingCartOutlined, Person } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signout } from "../Redux/userRedux";

function Navbar() {
	const user = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	const handleSignOut = (e) => {
		e.preventDefault();
		dispatch(signout());
	};
	return (
		<div className="navbar_container">
			<div className="navbar_left">
				<span>EN</span>
				<div className="navbar_searchContainer">
					<input
						type="text"
						placeholder="Search"
						className="navbar_searchBox"
					/>
					<Search style={{ color: "gray", fontSize: 16 }} />
				</div>
			</div>
			<div className="navbar_center">
				<Link
					to={`/`}
					style={{ textDecoration: "none", color: "black" }}
				>
					<h1>A-Plus</h1>
				</Link>
			</div>
			<div className="navbar_right">
				{!user && (
					<>
						<Link
							to={`/register`}
							style={{ textDecoration: "none", color: "black" }}
						>
							<div className="navbar_menuItems">REGISTER</div>
						</Link>
						<Link
							to={`/login`}
							style={{ textDecoration: "none", color: "black" }}
						>
							<div className="navbar_menuItems">SIGN IN</div>
						</Link>
					</>
				)}
				{user && (
					<>
						<Link
							onClick={handleSignOut}
							to={`/signout`}
							style={{ textDecoration: "none", color: "black" }}
						>
							<div className="navbar_menuItems">SIGN OUT</div>
						</Link>
						<Link
							to={`/profile`}
							style={{ textDecoration: "none", color: "black" }}
						>
							<div className="navbar_menuItems">
								<Person />
							</div>
						</Link>
					</>
				)}
				<div className="navbar_menuItems">
					<Link
						to="cart"
						style={{ textDecoration: "none", color: "black" }}
					>
						<Badge
							badgeContent={4}
							color="primary"
							overlap="rectangular"
						>
							<ShoppingCartOutlined />
						</Badge>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

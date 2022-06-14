import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userRedux";
import axios from "axios";

function Login() {
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const { isFetching, error } = useSelector((state) => state.user);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onLogInClicked = async (e) => {
		e.preventDefault();
		dispatch(loginStart());
		try {
			const res = await axios.post(
				"http://localhost:4000/api/auth/login",
				{ email: emailValue, password: passwordValue }
			);
			dispatch(loginSuccess(res.data));
			navigate("/");
		} catch (err) {
			dispatch(loginFailure());
		}
	};

	return (
		<div className="login_container">
			<div className="login_wrapper">
				<h1 className="login_title">LOGIN</h1>
				{error && <div className="login_fail">Failed to Login!</div>}
				<form className="login_form">
					<input
						className="login_input"
						value={emailValue}
						onChange={(e) => setEmailValue(e.target.value)}
						placeholder="E-mail"
					/>
					<input
						className="login_input"
						type="password"
						value={passwordValue}
						onChange={(e) => setPasswordValue(e.target.value)}
						placeholder="password"
					/>
					<button
						className="login_button"
						disabled={!emailValue || !passwordValue || isFetching}
						onClick={onLogInClicked}
					>
						LOGIN
					</button>
					<p
						className="login_link"
						onClick={() => navigate("/forgot-password")}
					>
						DO NOT YOU REMEMBER THE PASSWORD?
					</p>
					<p
						className="login_link"
						onClick={() => navigate("/register")}
					>
						CREATE A NEW ACCOUNT
					</p>
				</form>
			</div>
		</div>
	);
}

export default Login;

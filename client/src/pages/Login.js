import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
	const [errorMessage, setErrorMessage] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");

	const navigate = useNavigate();

	const onLogInClicked = async (e) => {
		e.preventDefault();
		alert("Log in not implemented yet");
	};

	return (
		<div className="login_container">
			<div className="login_wrapper">
				<h1 className="login_title">LOGIN</h1>
				{errorMessage && (
					<div className="login_fail">{errorMessage}</div>
				)}
				<form className="login_form">
					<input
						class="login_input"
						value={emailValue}
						onChange={(e) => setEmailValue(e.target.value)}
						placeholder="E-mail"
					/>
					<input
						class="login_input"
						type="password"
						value={passwordValue}
						onChange={(e) => setPasswordValue(e.target.value)}
						placeholder="password"
					/>
					<button
						className="login_button"
						disabled={!emailValue || !passwordValue}
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userRedux";
import axios from "axios";

function Register() {
	const [errorMessage, setErrorMessage] = useState("");

	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
	const [firstNameValue, setFirstNameValue] = useState("");
	const [lastNameValue, setLastNameValue] = useState("");
	const [usernameValue, setUsernameValue] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSignUpClicked = async (e) => {
		e.preventDefault();
		setErrorMessage("");

		//Register here
		try {
			const res = await axios.post(
				"http://localhost:4000/api/auth/register",
				{
					firstname: firstNameValue,
					lastname: lastNameValue,
					username: usernameValue,
					email: emailValue,
					password: passwordValue,
				}
			);
		} catch (err) {
			setErrorMessage("Sign Up Failed");
		}

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
		<div className="register_container">
			<div className="register_wrapper">
				<h1 className="register_title">CREATE AN ACCOUNT</h1>
				{errorMessage && (
					<div className="register_fail">{errorMessage}</div>
				)}
				<form className="register_form">
					<input
						class="register_input"
						placeholder="first name"
						value={firstNameValue}
						onChange={(e) => setFirstNameValue(e.target.value)}
					/>
					<input
						class="register_input"
						placeholder="last name"
						value={lastNameValue}
						onChange={(e) => setLastNameValue(e.target.value)}
					/>
					<input
						class="register_input"
						placeholder="username"
						value={usernameValue}
						onChange={(e) => setUsernameValue(e.target.value)}
					/>
					<input
						class="register_input"
						value={emailValue}
						onChange={(e) => setEmailValue(e.target.value)}
						placeholder="email"
					/>
					<input
						class="register_input"
						type="password"
						value={passwordValue}
						onChange={(e) => setPasswordValue(e.target.value)}
						placeholder="password"
					/>
					<input
						class="register_input"
						type="password"
						placeholder="confirm password"
						value={confirmPasswordValue}
						onChange={(e) =>
							setConfirmPasswordValue(e.target.value)
						}
					/>
					<div className="register_agreement">
						By creating an account, I consent to the processing of
						my personal data in accordance with the{" "}
						<b>PRIVACY POLICY</b>
					</div>
					<button
						className="register_button"
						disabled={
							!emailValue ||
							!passwordValue ||
							passwordValue !== confirmPasswordValue
						}
						onClick={onSignUpClicked}
					>
						CREATE
					</button>
				</form>

				<p className="register_link" onClick={() => navigate("/login")}>
					Already have an account? Log In
				</p>
			</div>
		</div>
	);
}

export default Register;

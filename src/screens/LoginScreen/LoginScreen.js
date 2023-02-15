import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { loginContext } from "../../context/loginContext.js";
import { StyledLogin } from "./LoginScreen.styled.js";

function SignInScreen() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const { login } = useContext(loginContext);
	const navigate = useNavigate();

	const register = (e) => {
		e.preventDefault();
	};

	const signIn = (e) => {
		e.preventDefault();
		login();
		navigate("/");
	};

	return (
		<StyledLogin className="login">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} placeholder="Email" type="email" required />
				<input
					ref={passwordRef}
					placeholder="Password"
					type="password"
					required
				/>
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className="login_gray">New to HomeShow? </span>
					<span className="login_link" onClick={register}>
						Sign up now
					</span>
				</h4>
			</form>
		</StyledLogin>
	);
}

export default SignInScreen;

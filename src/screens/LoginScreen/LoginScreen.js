import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormRow from "../../components/FormRow.js";
import { useAppContext } from "../../context/AppContext.js";
import { StyledLogin } from "./LoginScreen.styled.js";

const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true
};

function SignInScreen() {
	const [values, setValues] = useState(initialState);
	const { loginUser } = useAppContext();
	const navigate = useNavigate();

	const register = (e) => {
		e.preventDefault();
	};

	const signIn = (e) => {
		e.preventDefault();
		loginUser();
		navigate("/");
	};

	const onChangeHandler = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	return (
		<StyledLogin className="login">
			<form>
				<h1 className="mb-2 align-center">
					{values.isMember ? "Login" : "Register"}
				</h1>
				{!values.isMember && (
					<FormRow
						type="text"
						name="name"
						value={values.name}
						handleChange={onChangeHandler}
					/>
				)}
				<FormRow
					type="email"
					name="email"
					value={values.email}
					handleChange={onChangeHandler}
				/>
				<FormRow
					type="password"
					name="password"
					value={values.password}
					handleChange={onChangeHandler}
				/>
				<button type="submit" className="mt-2" onClick={signIn}>
					Submit
				</button>
				<button type="button" className="demo-button" onClick={signIn}>
					Demo App
				</button>
				<p>
					{values.isMember ? "Not a member yet?" : "Already a member?"}

					<button type="button" onClick={toggleMember} className="member-btn">
						{values.isMember ? "Register" : "Login"}
					</button>
				</p>
			</form>
		</StyledLogin>
	);
}

export default SignInScreen;

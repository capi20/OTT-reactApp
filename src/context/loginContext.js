import { useState, createContext } from "react";

export const loginContext = createContext({
	isLogin: false,
	login: () => {}
});

const LoginContextProvider = (props) => {
	const [auth, setAuth] = useState(false);

	const loginHandler = () => {
		setAuth(!auth);
	};

	return (
		<loginContext.Provider value={{ isLogin: auth, login: loginHandler }}>
			{props.children}
		</loginContext.Provider>
	);
};

export default LoginContextProvider;

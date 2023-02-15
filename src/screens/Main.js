import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import LoginScreen from "./LoginScreen/LoginScreen";
import Modal from "../components/Modal/Modal";
import { modalContext } from "../context/modalContext";
import styled from "styled-components";

const StyledMain = styled.main`
	padding-top: 100px;
	background-color: #192133;
	min-height: 100vh;
`;

const Main = () => {
	const { isOpen, modalClose, modalBody } = useContext(modalContext);
	return (
		<StyledMain>
			<Routes>
				<Route path="/search/:id" element={<SearchScreen />} />
				<Route path="login" element={<LoginScreen />} />
				<Route path="/" element={<HomeScreen />} />
			</Routes>
			<Modal isOpen={isOpen} close={modalClose}>
				{modalBody}
			</Modal>
		</StyledMain>
	);
};

export default Main;

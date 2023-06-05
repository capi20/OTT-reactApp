import { Route, Routes } from "react-router-dom";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import LoginScreen from "./LoginScreen/LoginScreen";
import Modal from "../components/Modal/Modal";
import styled from "styled-components";
import ProtectedRoute from "./ProtectedRoute";
import SharedLayout from "./SharedLayout";
import { useAppContext } from "../context/AppContext";

const StyledMain = styled.main`
	padding-top: 100px;
	background-color: #192133;
	min-height: 100vh;
`;

const Main = () => {
	const { isModalOpen, modalBody, closeModal } = useAppContext();
	return (
		<StyledMain>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}>
					<Route index element={<HomeScreen />} />
					<Route path="search/:id" element={<SearchScreen />} />
				</Route>
				<Route path="login" element={<LoginScreen />} />
			</Routes>
			<Modal isOpen={isModalOpen} close={closeModal}>
				{modalBody}
			</Modal>
		</StyledMain>
	);
};

export default Main;

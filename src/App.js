import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header/Header";
import SearchScreen from "./screens/SearchScreen";
import SearchContextProvider from "./context/searchContext";
import ModalContextProvider, { modalContext } from "./context/modalContext";
import Modal from "./components/Modal/Modal";
import { useContext } from "react";
import Main from "./screens/Main";

function App() {
	return (
		<ModalContextProvider>
			<SearchContextProvider>
				<div className="App">
					<Header />
					<Main />
				</div>
			</SearchContextProvider>
		</ModalContextProvider>
	);
}

export default App;

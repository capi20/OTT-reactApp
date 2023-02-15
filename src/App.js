import Header from "./components/Header/Header";
import Main from "./screens/Main";
import SearchContextProvider from "./context/searchContext";
import ModalContextProvider from "./context/modalContext";
import StyledGlobal from "./App.styled";
import LoginContextProvider from "./context/loginContext";

function App() {
	return (
		<SearchContextProvider>
			<LoginContextProvider>
				<div className="App">
					<StyledGlobal />
					<Header />
					<ModalContextProvider>
						<Main />
					</ModalContextProvider>
				</div>
			</LoginContextProvider>
		</SearchContextProvider>
	);
}

export default App;

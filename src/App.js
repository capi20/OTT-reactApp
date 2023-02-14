import Header from "./components/Header/Header";
import Main from "./screens/Main";
import SearchContextProvider from "./context/searchContext";
import ModalContextProvider from "./context/modalContext";
import StyledGlobal from "./App.styled";

function App() {
	return (
		<ModalContextProvider>
			<SearchContextProvider>
				<div className="App">
					<StyledGlobal />
					<Header />
					<Main />
				</div>
			</SearchContextProvider>
		</ModalContextProvider>
	);
}

export default App;

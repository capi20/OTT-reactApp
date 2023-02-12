import Header from "./components/Header/Header";
import SearchContextProvider from "./context/searchContext";
import ModalContextProvider from "./context/modalContext";
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

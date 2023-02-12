import { useState, createContext } from "react";

export const searchContext = createContext({
	searchResult: "",
	searchResultHandler: () => {}
});

const SearchContextProvider = (props) => {
	const [searchData, setSearchData] = useState("");

	const searchHandler = (result) => {
		setSearchData(result);
	};

	return (
		<searchContext.Provider
			value={{ searchResult: searchData, searchResultHandler: searchHandler }}>
			{props.children}
		</searchContext.Provider>
	);
};

export default SearchContextProvider;

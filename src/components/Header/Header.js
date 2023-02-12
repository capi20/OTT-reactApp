import React, { useRef, useState } from "react";

import { StyledNav } from "./Header.styled";
import axios from "../../axios";
import requests from "../../Requests";
import { FaSearch } from "react-icons/fa";

const Navigation = () => {
	const searchRef = useRef("");
	const [movies, setMovies] = useState("");

	const searchHandler = async () => {
		let searchQuery = searchRef.current.value;

		const request = await axios.get(
			`${requests.searchMovie}&query=${searchQuery}&page=1`
		);
		setMovies(request.data.results);
	};

	return (
		<StyledNav>
			<div className="nav__logo">HomeShow</div>
			<div className="nav__search">
				<input ref={searchRef} placeholder="Search" />
				<button onClick={searchHandler}>
					<FaSearch />
				</button>
			</div>
		</StyledNav>
	);
};

export default Navigation;

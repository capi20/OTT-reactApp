import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../../axios";
import requests from "../../Requests";
import { FaSearch } from "react-icons/fa";
import { searchContext } from "../../context/searchContext";
import { StyledNav } from "./Header.styled";

const Navigation = () => {
	const searchRef = useRef("");
	const { searchResultHandler } = useContext(searchContext);
	const navigate = useNavigate();

	const searchHandler = async () => {
		let searchQuery = searchRef.current.value;

		if (searchQuery === "") {
			return;
		}

		const request = await axios.get(
			`${requests.searchMovie}&query=${searchQuery}&page=1`
		);

		searchResultHandler(request.data.results);
		navigate(`/search/${searchQuery}`);
	};

	return (
		<StyledNav>
			<Link to="/" style={{ textDecoration: "none" }}>
				<div className="nav__logo">HomeShow</div>
			</Link>
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

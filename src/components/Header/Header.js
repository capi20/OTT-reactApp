import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../../axios";
import { searchAPI } from "../../Requests";
import { FaSearch } from "react-icons/fa";
import { searchContext } from "../../context/searchContext";
import { StyledNav } from "./Header.styled";

const Navigation = () => {
	const searchRef = useRef("");
	const [isSearch, setIsSearch] = useState(false);
	const { searchResultHandler } = useContext(searchContext);
	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener("click", function () {
			if (!isSearch) {
				setIsSearch(false);
				searchRef.current.value = "";
			}
		});
	}, []);

	const searchHandler = async (e) => {
		e.stopPropagation();
		setIsSearch(true);
		let searchQuery = searchRef.current.value;

		if (searchQuery === "") {
			searchRef.current.focus();
			return;
		}

		const request = await axios.get(`${searchAPI}&query=${searchQuery}&page=1`);

		if (request.data.results.length) {
			searchResultHandler(request.data.results);
		} else {
			searchResultHandler("");
		}

		navigate(`/search/${searchQuery}`);
	};

	return (
		<StyledNav>
			<Link to="/" style={{ textDecoration: "none" }}>
				<div className="nav__logo">HomeShow</div>
			</Link>
			<div className="nav__search">
				<input
					ref={searchRef}
					placeholder="Search"
					style={{
						width: isSearch ? "200px" : "0",
						// transform: isSearch ? "translateX(0)" : "translateX(50%)",
						opacity: isSearch ? 1 : 0
					}}
					onClick={(e) => e.stopPropagation()}
				/>

				<button onClick={(e) => searchHandler(e)}>
					<FaSearch />
				</button>
			</div>
		</StyledNav>
	);
};

export default Navigation;

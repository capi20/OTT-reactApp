import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../../axios";
import { searchAPI } from "../../Requests";
import { FaSearch, FaUser } from "react-icons/fa";
import { searchContext } from "../../context/searchContext";
import { loginContext } from "../../context/loginContext";
import { StyledNav } from "./Header.styled";

const Navigation = () => {
	const searchRef = useRef();
	const [searchQuery, setSearchQuery] = useState("");
	const [isSearch, setIsSearch] = useState(false);
	const { searchResultHandler } = useContext(searchContext);
	const { isLogin, login } = useContext(loginContext);
	const navigate = useNavigate();

	window.addEventListener("click", function () {
		if (isLogin && isSearch) {
			setIsSearch(false);
			setSearchQuery("");
		}
	});

	const searchHandler = async (e) => {
		e.stopPropagation();
		setIsSearch(true);

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
			{isLogin && (
				<div className="nav">
					<div className="nav__search">
						<input
							ref={searchRef}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Search"
							style={{
								width: isSearch ? "200px" : "0",
								opacity: isSearch ? 1 : 0
							}}
							onClick={(e) => e.stopPropagation()}
						/>

						<button onClick={(e) => searchHandler(e)}>
							<FaSearch />
						</button>
					</div>
					<Link to="/login" onClick={() => login()}>
						<FaUser />
					</Link>
				</div>
			)}
		</StyledNav>
	);
};

export default Navigation;

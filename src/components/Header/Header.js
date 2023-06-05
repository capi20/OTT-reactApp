import React, { useMemo, useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaSearch, FaTimes, FaUser } from "react-icons/fa";
import { StyledNav } from "./Header.styled";
import { useAppContext } from "../../context/AppContext";

const Navigation = () => {
	const searchRef = useRef();
	const [localSearch, setLocalSearch] = useState("");
	const [showSearch, setShowSearch] = useState(false);
	const [showLogout, setShowLogout] = useState(false);
	const { search, searchMovie, handleChange, logoutUser } = useAppContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (localSearch) {
			searchMovie(localSearch);
			navigate(`/search/${localSearch}`);
		}
	}, [search]);

	const showSearchHandler = () => {
		if (!showSearch) {
			searchRef.current.focus();
		}
		setLocalSearch("");
		setShowSearch(!showSearch);
	};

	const logoutHandler = () => {
		setShowLogout(false);
		logoutUser();
	};

	const debounce = () => {
		let timeoutID;
		return (e) => {
			setLocalSearch(e.target.value);
			clearTimeout(timeoutID);
			timeoutID = setTimeout(() => {
				handleChange({ name: e.target.name, value: e.target.value });
			}, 1000);
		};
	};
	const optimizedDebounce = useMemo(() => debounce(), []);

	return (
		<StyledNav>
			<Link to="/" style={{ textDecoration: "none" }}>
				<div className="nav__logo">HomeShow</div>
			</Link>
			<div className="nav">
				<div className="nav__search">
					<input
						ref={searchRef}
						name="search"
						value={localSearch}
						onChange={optimizedDebounce}
						placeholder="Search"
						className={showSearch ? "show-search" : ""}
					/>

					<button onClick={() => showSearchHandler()}>
						{showSearch ? <FaTimes /> : <FaSearch />}
					</button>
				</div>

				<div className="btn-container">
					<button
						type="button"
						className="btn"
						onClick={() => setShowLogout(!showLogout)}>
						<FaUser />
					</button>
					<div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
						<button
							type="button"
							className="dropdown-btn"
							onClick={logoutHandler}>
							logout
						</button>
					</div>
				</div>
			</div>
		</StyledNav>
	);
};

export default Navigation;

import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import MoviePoster from "../components/MoviePoster/MoviePoster";
import { searchContext } from "../context/searchContext";
import styled from "styled-components";

const StyledSearchScreen = styled.div`
	margin: 0 30px;
	color: white;

	@media only screen and (max-width: 768px) {
		margin: 0 15px;
	}

	.search-movie-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, max-content));
		grid-gap: 5px;
		justify-content: center;
	}
`;

const SearchScreen = () => {
	const { searchResult } = useContext(searchContext);
	const params = useParams();
	return (
		<StyledSearchScreen>
			<h2>Searched for: {params.id}</h2>

			{searchResult ? (
				<div className="search-movie-wrapper">
					{searchResult.map((movie) => (
						<MoviePoster movie={movie} />
					))}
				</div>
			) : (
				<h3>No result found!</h3>
			)}
		</StyledSearchScreen>
	);
};

export default SearchScreen;

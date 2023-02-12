import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import MoviePoster from "../components/MoviePoster/MoviePoster";
import { searchContext } from "../context/searchContext";
import styled from "styled-components";

const StyledSearchScreen = styled.div`
	margin: 0 30px;
	color: white;

	.search-movie-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 40px;
	}
`;

const SearchScreen = () => {
	const { searchResult } = useContext(searchContext);
	const params = useParams();
	return (
		<StyledSearchScreen>
			<h2>Results for: {params.id}</h2>

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

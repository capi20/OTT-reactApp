import { useParams } from "react-router-dom";

import MoviePoster from "../components/MoviePoster/MoviePoster";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

const StyledSearchScreen = styled.div`
	margin: 0 30px;
	color: white;

	@media only screen and (max-width: 768px) {
		margin: 0 15px;
	}

	.search-movie-wrapper {
		padding: 30px 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(163px, max-content));
		grid-gap: 15px;
	}

	p {
		font-size: 24px;
	}
`;

const SearchScreen = () => {
	const { searchResult } = useAppContext();
	const params = useParams();
	return (
		<StyledSearchScreen>
			<h1 className="mb-3">Searched for: {params.id}</h1>

			{searchResult ? (
				<div className="search-movie-wrapper">
					{searchResult.map((movie) => (
						<MoviePoster key={movie.id} movie={movie} />
					))}
				</div>
			) : (
				<p>Oops! No result found...</p>
			)}
		</StyledSearchScreen>
	);
};

export default SearchScreen;

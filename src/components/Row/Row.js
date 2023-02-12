import React, { useState, useEffect } from "react";

import axios from "../../axios";
import MoviePoster from "../MoviePoster/MoviePoster";
import { StyledRow } from "./Row.styled";

function Row({ title, fetchUrl, openModal, movieData, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchUrl]);

	return (
		<StyledRow>
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.poster_path)) && (
							<MoviePoster
								movie={movie}
								openModal={openModal}
								movieData={movieData}
								isLargeRow={isLargeRow}
							/>
						)
				)}
			</div>
		</StyledRow>
	);
}

export default Row;

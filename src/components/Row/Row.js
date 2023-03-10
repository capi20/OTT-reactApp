import React, { useState, useEffect } from "react";

import axios from "../../axios";
import MoviePoster from "../MoviePoster/MoviePoster";
import { StyledRow } from "./Row.styled";

function Row({ title, fetchUrl }) {
	const [movies, setMovies] = useState([]);

	console.log(fetchUrl);

	useEffect(() => {
		async function fetchData() {
			console.log(fetchUrl);
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
					(movie) => movie.poster_path && <MoviePoster movie={movie} />
				)}
			</div>
		</StyledRow>
	);
}

export default Row;

import React, { useState, useEffect } from "react";

import { StyledRow } from "./Row.styled";
import axios from "../../axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);

	const base_url = "https://image.tmdb.org/t/p/original";

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			console.log(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchUrl]);

	return (
		<StyledRow>
			<h2>{title}</h2>

			<div className="row__poster">
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.poster_path)) && (
							<div className="row__posterInfo">
								<img
									className={`row__poster-img ${
										isLargeRow && "row__poster-img--large"
									}`}
									key={movie.id}
									src={`${base_url}${
										isLargeRow ? movie.poster_path : movie.poster_path
									}`}
									alt={movie.name}
								/>
							</div>
						)
				)}
			</div>
		</StyledRow>
	);
}

export default Row;

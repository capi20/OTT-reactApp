import React, { useContext } from "react";

import MovieData from "../MovieData/MovieData";
import { modalContext } from "../../context/modalContext";
import { StyledMoviePoster } from "./MoviePoster.styled";

const MoviePoster = ({ movie, isLargeRow = false }) => {
	const { modalOpen, modalBodyHandler } = useContext(modalContext);

	const base_url = "https://image.tmdb.org/t/p/original";

	const modalHandler = (movie) => {
		modalOpen();
		const modalBody = <MovieData movieData={movie} />;
		modalBodyHandler(modalBody);
	};

	return (
		<StyledMoviePoster>
			{movie.poster_path && (
				<div className="row__posterInfo" onClick={() => modalHandler(movie)}>
					<img
						className={`row__poster-img ${
							isLargeRow && "row__poster-img--large"
						}`}
						key={movie.id}
						src={`${base_url}${movie.poster_path}`}
						alt={movie.name}
					/>
				</div>
			)}
		</StyledMoviePoster>
	);
};

export default MoviePoster;

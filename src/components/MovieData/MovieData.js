import React from "react";
import { StyledMovieData } from "./MovieData.styled";

const base_url = "https://image.tmdb.org/t/p/original";

const MovieData = ({ movieData }) => {
	return (
		<StyledMovieData>
			<img
				className="movie__poster"
				key={movieData.id}
				src={`${base_url}${movieData.backdrop_path}`}
				alt={movieData.name}
			/>
			<div className="movie__info">
				<h2>{movieData.original_title}</h2>
				<p>{movieData.overview}</p>
				{movieData.vote_average && (
					<p>Rating: {movieData.vote_average.toFixed(1)} / 10</p>
				)}
				{movieData.release_date && (
					<p>Release Date: {movieData.release_date}</p>
				)}
			</div>
		</StyledMovieData>
	);
};

export default MovieData;

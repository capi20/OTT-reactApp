import React, { useState } from "react";
import { Wrapper } from "./MoviePoster.styled";
import { FaHeart, FaInfoCircle, FaPlay } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";

const MoviePoster = ({ movie }) => {
	const [like, setLike] = useState(false);
	const { fetchMovieVideos, showMovieInfo } = useAppContext();

	const base_url = "https://image.tmdb.org/t/p/original";

	return (
		<>
			{movie.poster_path && (
				<>
					<Wrapper>
						<div className="row__poster">
							<img
								className="row__poster-img"
								key={movie.id}
								src={`${base_url}${movie.poster_path}`}
								alt={movie.name}
								onClick={() => showMovieInfo(movie)}
							/>
							<div className="row__poster-action">
								<FaPlay onClick={() => fetchMovieVideos(movie.id)} />
								<FaInfoCircle onClick={() => showMovieInfo(movie)} />
								<FaHeart
									className={like ? "like" : ""}
									onClick={() => setLike(!like)}
								/>
							</div>
						</div>
					</Wrapper>
				</>
			)}
		</>
	);
};

export default MoviePoster;

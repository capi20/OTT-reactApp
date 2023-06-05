import React, { useState, useEffect, useContext } from "react";

import axios from "../../axios";
import { trendingAPI } from "../../Requests";
import { StyledBanner } from "./Banner.styled";
import { FaInfoCircle, FaPlay } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";

const Banner = ({}) => {
	const [movie, setMovie] = useState([]);
	const { fetchMovieVideos, showMovieInfo } = useAppContext();

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(trendingAPI);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}

		fetchData();
	}, []);

	return (
		<StyledBanner
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
			}}>
			<div className="banner">
				<div className="banner__content">
					<h1 className="banner__content-title mb-3">
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
					<div className="banner__content-buttons">
						<button
							className="banner__content-button"
							onClick={() => fetchMovieVideos(movie.id)}>
							<FaPlay />
							<span>Play</span>
						</button>
						<button
							className="banner__content-button"
							onClick={() => showMovieInfo(movie)}>
							<FaInfoCircle />
							<span>More Info</span>
						</button>
					</div>
				</div>
			</div>

			{/* <div className="banner-bottom" /> */}
		</StyledBanner>
	);
};

export default Banner;

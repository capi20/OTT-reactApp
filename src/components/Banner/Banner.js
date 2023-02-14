import React, { useState, useEffect, useContext } from "react";

import axios from "../../axios";
import { trendingAPI } from "../../Requests";
import MovieData from "../MovieData/MovieData";
import { modalContext } from "../../context/modalContext";
import { StyledBanner } from "./Banner.styled";
import { FaInfoCircle, FaPlay } from "react-icons/fa";

const Banner = ({}) => {
	const [movie, setMovie] = useState([]);
	const { modalOpen, modalBodyHandler } = useContext(modalContext);

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

	const modalHandler = (movie) => {
		modalOpen();
		const modalBody = <MovieData movieData={movie} />;
		modalBodyHandler(modalBody);
	};

	return (
		<StyledBanner
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
			}}>
			<div className="banner">
				<div className="banner__content">
					<h1 className="banner__content-title">
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
					<div className="banner__content-buttons">
						<button className="banner__content-button">
							<FaPlay />
							<span>Play</span>
						</button>
						<button
							className="banner__content-button"
							onClick={() => modalHandler(movie)}>
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

import React, { useState, useEffect } from "react";

import { StyledBanner } from "./Banner.styled";
import axios from "../../axios";
import requests from "../../Requests";
import TypeWriter from "react-typewriter";

const Banner = ({ openModal, movieData }) => {
	const [movie, setMovie] = useState([]);
	const [overview, setOverview] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchTrending);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			console.log(movie);
			return request;
		}

		fetchData();
	}, []);

	const modalHandler = (movie) => {
		openModal();
		movieData(movie);
	};

	const truncate = (string, n) =>
		string?.length > n ? string.substr(0, n - 1) + "..." : string;

	return (
		<StyledBanner
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
			}}>
			<div className="banner-top">
				<h1 className="banner-top__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner-top__buttons">
					<button className="banner-top__button">Play</button>
					<button
						className="banner-top__button"
						onClick={() => modalHandler(movie)}>
						More Info
					</button>
				</div>
				<p
					className="banner-top__description"
					onClick={() => setOverview(!overview)}>
					<TypeWriter typing={1}>
						{overview ? truncate(movie?.overview, 150) : movie.overview}
					</TypeWriter>
				</p>
			</div>

			<div className="banner-bottom" />
		</StyledBanner>
	);
};

export default Banner;

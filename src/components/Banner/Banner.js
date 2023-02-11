import React, { useState, useEffect } from "react";

import { StyledBanner } from "./Banner.styled";
import axios from "../../axios";
import requests from "../../Requests";
import TypeWriter from "react-typewriter";

function Banner() {
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

	const truncate = (string, n) =>
		string?.length > n ? string.substr(0, n - 1) + "..." : string;

	return (
		<StyledBanner>
			<div
				className="banner"
				style={{
					backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
				}}>
				<div className="banner__contents">
					<h1 className="banner__title">
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
					<div className="banner__buttons">
						<button className="banner__button">Play</button>
						<button className="banner__button">My List</button>
					</div>
					<h1
						className="banner__description"
						onClick={() => setOverview(!overview)}>
						<TypeWriter typing={1}>
							{overview ? truncate(movie?.overview, 150) : movie.overview}
						</TypeWriter>
					</h1>
				</div>

				<div className="banner--fadeBottom" />
			</div>
		</StyledBanner>
	);
}

export default Banner;

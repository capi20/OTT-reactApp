import React, { useState, useEffect, useContext } from "react";

import axios from "../../axios";
import { trendingAPI } from "../../Requests";
import MovieData from "../MovieData/MovieData";
import { modalContext } from "../../context/modalContext";
import { StyledBanner } from "./Banner.styled";

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
			console.log(movie);
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
			</div>

			<div className="banner-bottom" />
		</StyledBanner>
	);
};

export default Banner;

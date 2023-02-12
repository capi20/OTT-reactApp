import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";
import requests from "../Requests";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";
import MovieData from "../components/MovieData/MovieData";

const Rows = styled.div`
	margin-top: -150px;
`;

const HomeScreen = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [movie, setMovie] = useState({});

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const movieDataHandler = (movie) => {
		setMovie(movie);
	};

	return (
		<section className="home">
			<Banner openModal={openModal} movieData={movieDataHandler} />
			<Rows>
				<Row
					title="Originals"
					fetchUrl={requests.fetNetflixOriginals}
					openModal={openModal}
					movieData={movieDataHandler}
					isLargeRow
				/>
				<Row
					title="Top Rated"
					fetchUrl={requests.fetchTopRated}
					openModal={openModal}
					movieData={movieDataHandler}
				/>
				<Row
					title="Action Movies"
					fetchUrl={requests.fetchActionMovies}
					openModal={openModal}
					movieData={movieDataHandler}
				/>
				<Row
					title="Comedy Movies"
					fetchUrl={requests.fetchComedyMovies}
					openModal={openModal}
					movieData={movieDataHandler}
				/>
				<Row
					title="Horror Movies"
					fetchUrl={requests.fetchHorrorMovies}
					openModal={openModal}
					movieData={movieDataHandler}
				/>
				<Row
					title="Romance Movies"
					fetchUrl={requests.fetchRomanceMovies}
					openModal={openModal}
					movieData={movieDataHandler}
				/>
				<Row
					title="Documentary"
					fetchUrl={requests.fetchDocumentaries}
					openModal={openModal}
					movieData={movieDataHandler}
				/>
			</Rows>
			<Modal isOpen={isOpen} close={closeModal}>
				<MovieData movieData={movie} />
			</Modal>
		</section>
	);
};

export default HomeScreen;

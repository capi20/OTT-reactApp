import React from "react";
import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";
import requests from "../Requests";
import styled from "styled-components";

const Rows = styled.div`
	margin-top: -150px;
`;

const homeScreen = () => {
	return (
		<section className="home">
			<Banner />
			<Rows>
				<Row
					title="Originals"
					fetchUrl={requests.fetNetflixOriginals}
					isLargeRow
				/>
				<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
				<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
				<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
				<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
				<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
				<Row title="Documentary" fetchUrl={requests.fetchDocumentaries} />
			</Rows>
		</section>
	);
};

export default homeScreen;

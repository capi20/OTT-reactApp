import React from "react";

import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";
import requests from "../Requests";
import styled from "styled-components";

const Rows = styled.div`
	margin-top: -150px;
`;

const HomeScreen = () => {
	return (
		<>
			<Banner />
			<Rows>
				{requests.map((request) => (
					<Row title={request[0]} fetchUrl={request[1]} />
				))}
			</Rows>
		</>
	);
};

export default HomeScreen;

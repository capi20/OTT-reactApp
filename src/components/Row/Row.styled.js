import styled from "styled-components";

export const StyledRow = styled.div`
	color: white;

	h2 {
		font-weight: 600;
		margin: 0;
		padding-left: 30px;

		@media only screen and (max-width: 768px) {
			padding-left: 15px;
		}
	}

	.row__posters {
		display: flex;
		gap: 8px;
		overflow-y: auto;
		overflow-x: scroll;
		padding: 25px 0 40px 30px;

		@media only screen and (max-width: 768px) {
			padding: 25px 0 40px 15px;
		}
	}

	.row__posters::-webkit-scrollbar {
		display: none;
	}
`;

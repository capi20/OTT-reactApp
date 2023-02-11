import styled from "styled-components";

export const StyledRow = styled.div`
	color: white;

	h2 {
		font-weight: 600;
		margin: 0;
		padding-left: 30px;
	}

	.row__poster {
		display: flex;
		gap: 8px;
		overflow-y: auto;
		overflow-x: scroll;
		padding: 25px 0 40px 30px;
	}

	.row__poster::-webkit-scrollbar {
		display: none;
	}

	.row__posterInfo {
		cursor: pointer;
		position: relative;
		transition: transform 450ms;
	}

	.row__posterInfo:hover {
		transform: scale(1.15);
		z-index: 9999;
	}

	.row__poster-img {
		max-height: 250px;
		object-fit: contain;
	}

	.row__poster-img--large {
		max-height: 300px;
	}
`;

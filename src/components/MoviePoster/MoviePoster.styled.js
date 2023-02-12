import styled from "styled-components";

export const StyledMoviePoster = styled.div.attrs({
	className: "row__poster"
})`
	.row__posterInfo {
		cursor: pointer;
		position: relative;
		transition: transform 450ms;

		&:hover {
			transform: scale(1.15);
			z-index: 9;
		}
	}

	.row__poster-img {
		max-height: 250px;
		object-fit: contain;
	}

	.row__poster-img--large {
		max-height: 300px;
	}
`;

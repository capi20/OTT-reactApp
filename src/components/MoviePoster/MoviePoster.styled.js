import styled from "styled-components";

export const Wrapper = styled.div`
	.row__poster {
		cursor: pointer;
		position: relative;
		transition: transform 450ms;

		&:hover {
			transform: scale(1.15);
			z-index: 9;
		}

		&-action {
			position: absolute;
			bottom: 0;
			background: black;
			opacity: 0.9;
			width: 100%;
			padding: 10px;
			display: flex;
			justify-content: space-around;
			visibility: hidden;
		}

		&:hover .row__poster-action {
			visibility: visible;
		}

		&-img {
			max-height: 250px;
			object-fit: contain;
		}
	}

	svg {
		height: 18px;
		width: 18px;
	}

	.like {
		color: red;
	}
`;

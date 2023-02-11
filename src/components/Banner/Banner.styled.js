import styled from "styled-components";

export const StyledBanner = styled.div`
	display: flex;
	flex-direction: column;
	height: 90vh;
	color: white;
	object-fit: contain;
	margin-bottom: 1rem;
	background-size: cover;
	background-position: center center;

	.banner-top {
		padding-left: 30px;
		padding-top: 140px;
		width: 40%;

		&__title {
			font-size: 3rem;
			font-weight: 700;
		}

		&__description {
			width: 100%;
			line-height: 1.3;
			font-size: 1.2rem;
			font-weight: 600;
			cursor: pointer;
		}

		&__button {
			font-size: 1.2rem;
			cursor: pointer;
			color: white;
			background-color: #192133;
			outline: none;
			border: none;
			border-radius: 5px;
			padding: 0.7rem 2rem;
			margin-right: 1rem;

			&:hover {
				opacity: 0.9;
				transition: all 0.2s;
			}
		}
	}

	.banner-bottom {
		flex: 1 1;
		background-image: linear-gradient(
			180deg,
			transparent,
			rgba(37, 37, 37, 0.61),
			#192133
		);
	}
`;

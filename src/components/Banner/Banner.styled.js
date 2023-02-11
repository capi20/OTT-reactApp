import styled from "styled-components";

export const StyledBanner = styled.header`
	.banner {
		display: flex;
		flex-direction: column;
		height: 90vh;
		position: relative;
		color: white;
		object-fit: contain;
		margin-bottom: 1rem;
		background-size: cover;
		background-position: center center;
	}

	.banner__contents {
		padding-left: 30px;
		padding-top: 140px;
		width: 40%;
	}

	.banner__title {
		font-size: 3rem;
		font-weight: 800;
		padding-bottom: 0.3rem;
	}

	.banner__description {
		width: 50rem;
		line-height: 1.3;
		padding-top: 1rem;
		font-size: 1.1rem;
		max-width: 360px;
		height: 80px;
		font-weight: 600;
		cursor: pointer;
	}

	.banner__button {
		cursor: pointer;
		color: white;
		outline: none;
		border: none;
		font-weight: 700;
		border-radius: 0.2vw;
		padding-left: 2rem;
		padding-right: 2rem;
		margin-right: 1rem;
		padding-top: 0.5rem;
		background-color: rgba(51, 51, 51, 0.5);
		padding-bottom: 0.5rem;
	}

	.banner__button:hover {
		background-color: #192133;
		transition: all 0.2s;
	}

	.banner--fadeBottom {
		flex: 1 1;
		background-image: linear-gradient(
			180deg,
			transparent,
			rgba(37, 37, 37, 0.61),
			#111
		);
	}
`;

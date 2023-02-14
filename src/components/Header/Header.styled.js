import styled from "styled-components";

export const StyledNav = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	padding: 30px 0;
	width: 100%;
	height: 50px;
	z-index: 999;
	background-image: linear-gradient(
		180deg,
		#192133,
		rgba(37, 37, 37, 0.61),
		transparent
	);

	.nav__logo {
		cursor: pointer;
		color: orange;
		font-weight: 700;
		font-size: 30px;
		margin-left: 30px;

		@media only screen and (max-width: 768px) {
			margin-left: 15px;
		}
	}

	.nav__search {
		margin-right: 30px;
		display: flex;

		input {
			outline: none;
			padding: 10px 15px;
			margin-right: -30px;
			border: 1px solid white;
			border-radius: 99px;
			background-color: #192133;
			color: white;
			font-size: 14px;
			transition: all 0.3s;
		}

		button {
			background: transparent;
			border: none;
			padding: 0;
			border-radius: 99px;
			cursor: pointer;
			color: white;
			position: relative;
			z-index: 9;

			svg {
				width: 18px;
				height: 18px;
			}
		}
	}
`;

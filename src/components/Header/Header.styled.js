import styled from "styled-components";

export const StyledNav = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	padding: 20px 0;
	width: 100%;
	height: 50px;
	z-index: 1;
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
	}

	.nav__search {
		margin-right: 30px;
		display: flex;

		input {
			outline: none;
			padding: 10px;
			margin-right: -20px;
			width: 100%;
			border: none;
			border-radius: 99px;
		}

		button {
			background: transparent;
			border: none;
			padding: 0;
			border-radius: 99px;
			cursor: pointer;

			&:hover {
				color: #192133;
			}
		}
	}
`;

import styled from "styled-components";

export const StyledNav = styled.header`
	position: fixed;
	top: 0;
	padding: 20px 30px;
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
	}
`;

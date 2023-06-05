import styled from "styled-components";

export const StyledNav = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	padding: 18px 0;
	width: 100%;
	z-index: 999;
	background-image: linear-gradient(
		180deg,
		#192133,
		rgba(37, 37, 37, 0.7),
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

	.nav {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex: 1;
		gap: 20px;
		margin-right: 30px;

		svg {
			width: 22px;
			height: 22px;
			color: white;
		}
	}

	.nav__search {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		max-width: 300px;

		input {
			outline: none;
			width: 0px;
			opacity: 0;
			padding: 10px 15px;
			margin-right: -30px;
			border: 1px solid white;
			background-color: #192133;
			color: white;
			font-size: 17px;
			transition: all 0.3s;
		}

		.show-search {
			width: 100%;
			opacity: 1;
		}

		button {
			background: transparent;
			border: none;
			padding: 0;
			border-radius: 99px;
			cursor: pointer;
			position: relative;
			z-index: 9;
		}
	}

	.btn-container {
		position: relative;
		text-align: center;
	}

	.dropdown {
		position: absolute;
		top: 40px;
		left: -22px;
		width: fit-content;
		background: orange;
		padding: 0.5rem 1rem;
		text-align: center;
		visibility: hidden;
		border-radius: 5px;
	}
	.show-dropdown {
		visibility: visible;
	}
	.dropdown-btn {
		background: transparent;
		color: white;
		border-color: transparent;
		text-transform: capitalize;
		cursor: pointer;
		letter-spacing: 1px;
	}
`;

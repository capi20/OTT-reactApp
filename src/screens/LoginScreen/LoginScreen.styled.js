import styled from "styled-components";

export const StyledLogin = styled.div`
	max-width: 300px;
	padding-top: 40px;
	margin-left: auto;
	margin-right: auto;
	color: white;
	letter-spacing: 1px;
	font-size: 18px;

	form {
		display: grid;
		flex-direction: column;
		gap: 20px;
	}

	form button {
		padding: 10px 20px;
		background-color: orange;
	}

	.demo-button {
		background-color: transparent;
		border: 1px solid white;
	}

	p {
		text-align: center;
	}

	.member-btn {
		padding: 0 5px;
		background: transparent;
		cursor: pointer;
		color: orange;
	}
`;

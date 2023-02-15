import styled from "styled-components";

export const StyledLogin = styled.div`
	max-width: 300px;
	padding-top: 40px;
	margin-left: auto;
	margin-right: auto;
	color: white;

	form {
		display: grid;
		flex-direction: column;
	}

	form > h1 {
		text-align: left;
		margin-bottom: 25px;
	}

	form > input {
		outline-width: 0;
		height: 40px;
		margin-bottom: 14px;
		border-radius: 5px;
		border: none;
		padding: 5px 15px;
		font-size: 1rem;
	}

	form > button {
		padding: 16px 20px;
		font-size: 1rem;
		color: #fff;
		border-radius: 5px;
		background-color: orange;
		font-weight: 600;
		border: none;
		cursor: pointer;
		margin-top: 20px;
	}

	form > h4 {
		text-align: left;
		margin-top: 30px;
	}

	.login_gray {
		color: gray;
	}

	.login_link:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

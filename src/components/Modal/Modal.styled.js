import styled from "styled-components";

export const StyledModal = styled.div.attrs({
	className: "modal"
})`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 99;
	min-width: 50vw;
	border: none;
	background-color: white;
	box-shadow: 1px 1px 1px #192133;
	transition: all 0.3s ease-out;

	@media only screen and (max-width: 768px) {
		min-width: 80vw;
	}
`;

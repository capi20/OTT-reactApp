import React from "react";

import styled from "styled-components";

const StyledBackdrop = styled.div.attrs({
	className: "backdrop"
})`
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 98;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
`;

const Backdrop = ({ isOpen, close }) => {
	return isOpen ? <StyledBackdrop onClick={close}></StyledBackdrop> : null;
};

export default Backdrop;

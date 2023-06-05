import styled from "styled-components";

const Wrapper = styled.div.attrs({
	className: "form-row"
})`
	label {
		display: block;
		text-transform: capitalize;
		letter-spacing: 1px;
	}

	input {
		outline-width: 0;
		height: 40px;
		width: 100%;
		border-radius: 5px;
		border: none;
		padding: 5px 10px;
		font-size: 1rem;
	}
`;

const FormRow = ({ type, name, value, handleChange, labelText }) => {
	return (
		<Wrapper>
			<label htmlFor={name} className="form-label mb-2">
				{labelText || name}
			</label>
			<input
				type={type}
				value={value}
				name={name}
				id={name}
				onChange={handleChange}
				className="form-input"
			/>
		</Wrapper>
	);
};
export default FormRow;

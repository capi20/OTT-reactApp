import { useState, createContext } from "react";

export const modalContext = createContext({
	isOpen: false,
	modalBody: "",
	modalClose: () => {},
	modalOpen: () => {},
	modalBodyHandler: () => {}
});

const ModalContextProvider = (props) => {
	const [open, setOpen] = useState("");
	const [modalData, setModalData] = useState("");

	const closeHandler = () => {
		setOpen(false);
	};

	const openHandler = () => {
		setOpen(true);
	};

	const dataHandler = (data) => {
		setModalData(data);
	};

	return (
		<modalContext.Provider
			value={{
				isOpen: open,
				modalBody: modalData,
				modalClose: closeHandler,
				modalOpen: openHandler,
				modalBodyHandler: dataHandler
			}}>
			{props.children}
		</modalContext.Provider>
	);
};

export default ModalContextProvider;

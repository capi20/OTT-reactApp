import {
	HANDLE_CHANGE,
	CLOSE_MODAL,
	OPEN_MODAL,
	SET_MODAL_DATA,
	LOGIN_USER,
	LOGOUT_USER,
	SEARCH_MOVIE_START,
	SEARCH_MOVIE_SUCCESS
} from "./actions";

const reducer = (state, action) => {
	if (action.type === HANDLE_CHANGE) {
		return {
			...state,
			[action.payload.name]: action.payload.value
		};
	}
	if (action.type === OPEN_MODAL) {
		return {
			...state,
			isModalOpen: true
		};
	}
	if (action.type === CLOSE_MODAL) {
		return {
			...state,
			isModalOpen: false,
			modalBody: ""
		};
	}
	if (action.type === SET_MODAL_DATA) {
		return {
			...state,
			isModalOpen: true,
			modalBody: action.payload.data
		};
	}
	if (action.type === LOGIN_USER) {
		return {
			...state,
			isAuth: true
		};
	}
	if (action.type === LOGOUT_USER) {
		return {
			...state,
			isAuth: false
		};
	}
	if (action.type === SEARCH_MOVIE_START) {
		return {
			...state
		};
	}
	if (action.type === SEARCH_MOVIE_SUCCESS) {
		return {
			...state,
			searchResult: action.payload.data
		};
	}
	throw new Error(`no such action : ${action.type}`);
};

export default reducer;

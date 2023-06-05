import { createContext, useContext, useReducer } from "react";
import YouTube from "react-youtube";
import API_KEY from "../apiKey";
import axios from "../axios";
import reducer from "./reducer";
import MovieData from "../components/MovieData/MovieData";
import {
	CLOSE_MODAL,
	OPEN_MODAL,
	SET_MODAL_DATA,
	LOGIN_USER,
	LOGOUT_USER,
	SEARCH_MOVIE_START,
	SEARCH_MOVIE_SUCCESS,
	HANDLE_CHANGE
} from "./actions";
import { searchAPI } from "../Requests";

const initialState = {
	isModalOpen: false,
	modalBody: "",
	isAuth: false,
	search: "",
	searchResult: ""
};

const opts = {
	height: "600",
	width: "100%",
	playerVars: {
		autoplay: 1
	}
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleChange = ({ name, value }) => {
		dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
	};

	const openModal = () => {
		dispatch({ type: OPEN_MODAL });
	};

	const closeModal = () => {
		dispatch({ type: CLOSE_MODAL });
	};

	const setModalData = (data) => {
		dispatch({ type: SET_MODAL_DATA, payload: { data } });
	};

	const fetchMovieVideos = async (movieId) => {
		const movieData = await axios.get(
			`/movie/${movieId}/videos?api_key=${API_KEY}`
		);
		const vidId =
			movieData.data.results.find((vid) => vid.name === "Trailer") ||
			movieData.data.results[0];

		const renderData = <YouTube videoId={vidId.key} opts={opts} />;
		setModalData(renderData);
	};

	const showMovieInfo = (movie) => {
		const renderData = <MovieData movieData={movie} />;
		setModalData(renderData);
	};

	const loginUser = () => {
		dispatch({ type: LOGIN_USER });
	};

	const logoutUser = () => {
		dispatch({ type: LOGOUT_USER });
	};

	const searchMovie = async (query) => {
		dispatch({ type: SEARCH_MOVIE_START });

		const request = await axios.get(`${searchAPI}&query=${query}&page=1`);
		const data = request.data.results.length ? request.data.results : "";

		dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: { data } });
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				openModal,
				closeModal,
				fetchMovieVideos,
				showMovieInfo,
				loginUser,
				logoutUser,
				searchMovie,
				handleChange
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

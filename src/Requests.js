import API_KEY from "./apiKey";

const requests = [
	["Top Rated", `/movie/top_rated?api_key=${API_KEY}&language=en-US`],
	["Popular", `/movie/popular?api_key=${API_KEY}`],
	["Action", `/discover/movie/?api_key=${API_KEY}&with_genres=28`],
	["Adventure", `/discover/movie/?api_key=${API_KEY}&with_genres=12`],
	["Animation", `/discover/movie/?api_key=${API_KEY}&with_genres=16`],
	["Comedy", `/discover/movie/?api_key=${API_KEY}&with_genres=35`],
	["Crime", `/discover/movie/?api_key=${API_KEY}&with_genres=80`]
	// ["Documentary", `/discover/movie/?api_key=${API_KEY}&with_genres=99`],
	// ["Drama", `/discover/movie/?api_key=${API_KEY}&with_genres=18`],
	// ["Family", `/discover/movie/?api_key=${API_KEY}&with_genres=10751`],
	// ["Fantasy", `/discover/movie/?api_key=${API_KEY}&with_genres=14`],
	// ["History", `/discover/movie/?api_key=${API_KEY}&with_genres=36`],
	// ["Horror", `/discover/movie/?api_key=${API_KEY}&with_genres=27`],
	// ["Music", `/discover/movie/?api_key=${API_KEY}&with_genres=10402`],
	// ["Mystery", `/discover/movie/?api_key=${API_KEY}&with_genres=9648`],
	// ["Romance", `/discover/movie/?api_key=${API_KEY}&with_genres=10749`],
	// ["Science Fiction", `/discover/movie/?api_key=${API_KEY}&with_genres=878`],
	// ["TV Movie", `/discover/movie/?api_key=${API_KEY}&with_genres=10770`],
	// ["Thriller", `/discover/movie/?api_key=${API_KEY}&with_genres=53`],
	// ["War", `/discover/movie/?api_key=${API_KEY}&with_genres=10752`],
	// ["Western", `/discover/movie/?api_key=${API_KEY}&with_genres=37`]
];

export const trendingAPI = `/trending/movie/week?api_key=${API_KEY}&language=en-US`;

export const searchAPI = `/search/movie?api_key=${API_KEY}`;

export default requests;

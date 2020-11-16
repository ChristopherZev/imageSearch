/*
This file hold the configurations of Axios and how  Unsplash
accepts our request.
*/

import axios from 'axios';

const Authorization = process.env.REACT_APP_AUTH

export default axios.create({
	baseURL: 'https://api.unsplash.com', 
	
	headers: {
		Authorization: `bearer ${Authorization}`
	}
});
/*
This file hold the configurations of Axios and how  Unsplash
accepts our request.
*/

import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/search/photos', 
	
	headers: {
		Authorization: 'Client-ID 67f8a7b922bccd5adade12bf5acf5dd9092f1e9797244ac13a4a3bc1c2461ef1'
	}
});
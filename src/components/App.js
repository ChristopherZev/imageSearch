import React from 'react';
import axios from 'axios';
//Best practice list import for 3rd party/dependencies before our own files

import SearchField from './SearchField';
import ListOfImages from './ListOfImages';


class App extends React.Component{
	/*
	created onSearchSubmit to pass user input from the searchfield
	component
	*/
	onSearchSubmit(searchTerm){
		/*
		Axios.get uses the Unsplash Api to return a photo based
		on the "searchTerm" entered 
		*/
		axios.get('https://api.unsplash.com/search/photos',{
			params: {
				query: searchTerm
			},
			headers: {
				Authorization: 'Client-ID 67f8a7b922bccd5adade12bf5acf5dd9092f1e9797244ac13a4a3bc1c2461ef1'
			}
		});
	}

	render() {
		return(
			<div className="ui container" style={{marginTop: '10px'}}>
				{/*
				 this line called onSearchSubmit
				*/}
				<SearchField onSubmit={this.onSearchSubmit} />
					<br/>
				<ListOfImages />
			</div>
		);

	}
	
}



export default App;
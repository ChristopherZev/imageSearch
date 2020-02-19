import React from 'react';
import unsplash from '../api/unsplash';

import SearchField from './SearchField';
import ListOfImages from './ListOfImages';


class App extends React.Component{

	state = {pics: [] };
	onSearchSubmit = async (searchTerm) => {
		
		const response = await unsplash.get('https://api.unsplash.com/search/photos',{
			params: {query: searchTerm}
		});
	
		this.setState({ pics: response.data.results});
	}

	render() {
		return(
			<div className="ui container" style={{marginTop: '10px'}}>
	
				<SearchField onSubmit={this.onSearchSubmit} />
				Found: {this.state.pics.length} pictures.
					<br/>
				
				<ListOfImages />
			</div>
		);

	}
	
}



export default App;
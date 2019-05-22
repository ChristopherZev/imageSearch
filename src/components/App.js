import React from 'react';
import SearchField from './SearchField';
import ListOfImages from './ListOfImages';


class App extends React.Component{
	/*
	created onSearchSubmit to pass user input from the searchfield
	component
	*/
	onSearchSubmit(searchTerm){
		console.log(searchTerm);
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
	
};



export default App;
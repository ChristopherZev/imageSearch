import React from 'react';
import SearchField from './SearchField';
import ListOfImages from './ListOfImages';


class App extends React.Component{
	render() {
		return(
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchField />
					<br/>
				<ListOfImages />
			</div>
		);

	}
	
};



export default App;
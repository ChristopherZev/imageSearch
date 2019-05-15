import React from 'react';
import SearchField from './SearchField';
import ListOfImages from './ListOfImages';


class App extends React.Component{
	render() {
		return(
			<div>Hello App
				<SearchField />
					<br/>
				<ListOfImages />
			</div>
		);

	}
	
};



export default App;
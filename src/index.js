import React from 'react';
import ReactDOM from 'react-dom';
import SearchField from './SearchField';
import ListOfImages from './ListOfImages';


class App extends React.Component{
	render() {
		return(
			<div>
				<SearchField />
					<br/>
				<ListOfImages />
			</div>
		);

	}
	
};



ReactDOM.render(<App />,document.querySelector('#root'));

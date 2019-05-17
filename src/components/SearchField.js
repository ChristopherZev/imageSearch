import React from 'react';

class SearchField extends React.Component{
	render(){	
		return(
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Search Images</label>
						<input type="text" />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchField;

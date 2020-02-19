import React from 'react';

class SearchField extends React.Component{

	state = { searchTerm: '' };

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.searchTerm);
	}
	
	render(){	
		return(
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit}className="ui form">
					<div className="field">
						<label>Search Images</label>
						<input type="text" 
						value={this.state.searchTerm}
						onChange={e => this.setState({ searchTerm: e.target.value })} />

					</div>
				</form>
			</div>
		);
	}
}

export default SearchField;

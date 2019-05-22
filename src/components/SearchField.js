import React from 'react';

class SearchField extends React.Component{
	/*
	The onInputchange method is made to handle or be called 
	any time someone changes the input.

	It is named specifically on Input Change because it targets
	any change made to the input tag where the func is called
	via the onChange prop
	*/
	onInputChange(event){
		console.log(event.target.value);
	}
	
	render(){	
		return(
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Search Images</label>
						{/*
						onChange is a new prop that references onInputChange
						via the this.onInputChange callback function, however 
						we do not write it as this.onInputChange() because
						the () would cause it to run every time the component
						rerenders, instead we are passing a reference to the 
						***input element*** so the input element can call the 
						func some time in the future.

						Others examples of eventhandlers are onClick,onSubmit
						*/}
						<input type="text" 
						/*
						onChange can have the abbreviated version using arrow
						functions seen below as well. With this version you
						do not need to define the onInputChange handler above
						
						onChange={(e) => console.log(e.target.value)} />

						*/
						onChange={this.onInputchange} />

					</div>
				</form>
			</div>
		);
	}
}

export default SearchField;

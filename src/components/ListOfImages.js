import React from 'react';

const ListOfImages = (props) => {
	
	const pics = props.pics.map((pic) =>{
		return <img src={pic.urls.regular} alt="missing image"/>
	});

	return(
		<div>{pics}</div>		
	
	);
};

export default ListOfImages;
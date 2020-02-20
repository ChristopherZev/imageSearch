import React from 'react';

const ListOfImages = (props) => {
	
	const pics = props.pics.map(({description, id, urls}) =>{
		return <img key={id} src={urls.regular} alt={description}/>
	});

	return(
		<div>{pics}</div>		
	
	);
};

export default ListOfImages;
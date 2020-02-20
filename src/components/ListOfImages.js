import './ListOfImages.css';

import React from 'react';
import ImageCard from './ImageCard';

const ListOfImages = (props) => {
	
	const pics = props.pics.map(pic =>{
		return <ImageCard key={pic.id} pic={pic}/>
	});

	return(
		<div className="pic-list">{pics}</div>		
	
	);
};

export default ListOfImages;
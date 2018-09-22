import React from 'react';
import './Image.css';

const Image=({imageUrl, box})=>{
	return(
		<div className='center'>
			<div className='absolute mt2'>
			<img id='inputimage' className='image' src={imageUrl} alt='' />
			{
			box.map(num=>{
			return(<div className='bounding-box' 
			style={{ top:num.topRow, left:num.leftCol, bottom:num.bottomRow, right:num.rightCol}}>
			</div>);
			})
			}	
			</div>
		</div>
		);
}
export default Image;
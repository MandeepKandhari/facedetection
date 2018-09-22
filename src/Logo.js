import React from 'react';
import Brain from './Brain.png';
import Tilt from 'react-tilt';
import './Logo.css';
 

const Logo=()=>{
	
		return(
		<div className='flex justify-between'>
			<div className='w-40 pa2'>
				<Tilt className="Tilt mv2-l mv1 mh4-l pa1  flex justify-center items-center br-100" options={{ max : 55 }} >
	 				<div className="Tilt-inner pa0"> 
	 					<img className='ma3-l ml0-m' src={Brain} alt='logo' />
	 				</div>
				</Tilt>
			</div>
		</div>
		);
	}
export default Logo;
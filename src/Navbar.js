import React from 'react';
import Logo from './Logo.png';
import Tilt from 'react-tilt';
import './Navbar.css';
 

const Navbar=()=>{
	
		return(
		<div className='pa2'>
				<Tilt className="Tilt br-100 mv2 mh3 pa0" options={{ max : 55 }} >
	 				<img className='tilt-inner'src={Logo} alt='logo' />
	 			</Tilt>
			</div>
		);
	}
export default Navbar;
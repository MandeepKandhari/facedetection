import React from 'react';
import './Form.css';
const Form = ({onInputChange, onButtonClick})=>{
	return(
		<div className='center mt2'>
			<div className='center frm w-80 w-60-l mt5 pa4-m pa4-l pa2 ma3 grow bw3 br3 shadow-5'>
				<input className=' w-80 center w-70-l ma2 pa3' type='text' onChange={onInputChange} placeholder='Enter image url...' />
				<button className='w-20 pointer center w-20-l ma2-l mt3 mt0-m pa3 br3 bg-light-blue' onClick={onButtonClick} type='button'>Submit</button>
			</div>
		</div>
		
		);
}
export default Form; 
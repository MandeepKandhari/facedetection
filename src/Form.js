import React from 'react';
import './Form.css';
const Form = ({onInputChange, onButtonClick})=>{
	return(
		<div className='center mt2'>
			<div className='flex flex-wrap-m justify-center frm w-80 w-60-l mt5 pa4-m pa4-l pa2 ma3 grow bw3 br3 shadow-5'>
				<input className=' w-80-l w-80 ma2 pa3-l pa2' type='text' onChange={onInputChange} placeholder='Enter image url...' />
				<button className='w-20-l pointer ma2 pa3-l pa2 br3 bg-light-blue' onClick={onButtonClick} type='button'>Submit</button>
			</div>
		</div>
		
		);
}
export default Form; 
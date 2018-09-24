import React from 'react';
import './Form.css';
const Form = ({onInputChange, onButtonClick})=>{
	return(
		<div className='pa2 flex flex-column items-center justify-center'>
			<h6 className='w-60 mv5 f3 center black tc'>This is a face detection web application. Enter image Url and the application will detect the human faces in it.</h6>
        	<div className='flex flex-wrap-m justify-center frm w-80 w-60-l pa4-m pa4-l pa2 mh3 mv3 grow bw3 br3 shadow-5'>
				<input className=' w-80 ma2 pa3-l pa2' type='text' onChange={onInputChange} placeholder='Enter image url...' />
				<button className='w-20 pointer ma2 pa3-l pa2 br3 bg-light-blue' onClick={onButtonClick} type='button'>Submit</button>
			</div>
		</div>
		
		);
}
export default Form; 
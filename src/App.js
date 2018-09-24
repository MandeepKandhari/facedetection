import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navbar from'./Navbar';
import Form from './Form';
import Image from './Image';
import 'tachyons';
import './App.css';

const particlesOptions={
  
                particles: {
                  number:{
                    value:80,
                    density:{
                    enable:true,
                    value_area:900
                    
                  }
                }
              }
            }
class App extends Component {
  constructor(){
  super();
  this.state={
    input: '' ,
    imageUrl:'' ,
    box:[]
  }

}

calculateFaceLocation = (data) => {
  const ClarifaiFace = data.outputs[0].data.regions.map((num,i)=>{
    return (num.region_info.bounding_box);
  });
  
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height=Number(image.height);
  
  const box= ClarifaiFace.map((num,i)=>{
    return{
    topRow:num.top_row * height,
    leftCol: num.left_col * width,
    bottomRow: height - (num.bottom_row * height),
    rightCol: width - (num.right_col * width),
  };
  })
  return box;
}

displayFaceBox=(box)=>this.setState({box:box});

onInputChange=(event)=>{
  this.setState({input:event.target.value});
  this.setState({box:[]})
}

onButtonClick=(event)=>{
  this.setState({imageUrl:this.state.input});
  fetch('https://facedetection-backend.herokuapp.com/imageurl',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        input:this.state.input
      })
    })
    .then(response=>response.json())
    .then(data=>this.displayFaceBox(this.calculateFaceLocation(data))) 
}


render() {
   
  return (
    <div className='App'>
      <Particles className='particles' params={particlesOptions} />
      <div>
        <Navbar/>
        <Form onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}  /> 
        <Image box={this.state.box} imageUrl={this.state.imageUrl}  />
      </div>
    </div>

    );
  }
}

export default App;

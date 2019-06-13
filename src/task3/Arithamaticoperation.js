import React, { Component } from 'react';
 import './airthmatic.css'

class Arithamaticoperation extends Component {
   constructor(props){
    super(props);
    this.state={number:10,number1:10,number2:10
    };
}
addition=()=> {
this.setState(
    {  number:this.state.number=this.state.number +5}
)
}
subtarction=()=> {
    if(this.state.number1>0)
    this.setState(
        
        {  number1:this.state.number1=this.state.number1 -5}
    )
    }
    multipication=()=> {
        this.setState(
            {  number2:this.state.number2=this.state.number2 *5}
        )
        } 
    render() {
        return (
            <div id="body" ><br></br><br></br>
                <b id="b1">{this.state.number}</b>
                <b id="b2">{this.state.number1}</b>
                <b id="b3">{this.state.number2}</b><br></br>
                <button id="button" onClick={this.addition}>Addition</button>
                <button  id="button" onClick={this.subtarction}>Subtarction</button>
                <button  id="button" onClick={this.multipication}>Multipication</button>
                {/* <h1><i>Select Your Operation</i></h1> */}
            </div>
        );
    }
}
export default Arithamaticoperation;
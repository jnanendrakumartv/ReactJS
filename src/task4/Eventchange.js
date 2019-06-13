import React, { Component } from 'react';
import './Eventchange.css'
class Eventchange extends Component {
    constructor(props) {
    super(props);
    this.state = {one: '', two:'', three:'Jnanendra'};
}
handleChange=(event) =>{
    this.setState({one: event.target.value});
}
nameChange=()=>{
    this.setState({two:this.state.three})
}   
render() {
    return (
        <form id="color" >
            <h1>{this.state.one}</h1>
            <input type='text' onChange={this.handleChange} ></input>
            <h1>{this.state.two}</h1>
            <input type='text' value='Kumar' ></input>
            <button id="button1" type="button" value="Submit" onClick={this.nameChange}>click</button> </form>
       
        );
    }
}

export default Eventchange;


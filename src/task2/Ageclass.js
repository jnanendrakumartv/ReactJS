import React, { Component } from 'react';
import Ageprint from './Ageprint';

class Ageclass extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.title}</h1> 
                <Ageprint age="25">Jnanendra</Ageprint>
                <Ageprint age="27">Harish</Ageprint>
                <Ageprint age="27">Vijay</Ageprint> 
            </div>
        );
    }
}

export default Ageclass;
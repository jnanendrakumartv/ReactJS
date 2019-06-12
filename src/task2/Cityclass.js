import React, { Component } from 'react';
import Cityprint from './Cityprint';
class Cityclass extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1> 
                <Cityprint city="nagara">Jnanendra</Cityprint>
                <Cityprint city="Bangalore">Harish</Cityprint>
                <Cityprint city="Pandavapura">Vijay</Cityprint>
            </div>
        );
    }
}

export default Cityclass;
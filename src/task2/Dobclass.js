import React, { Component } from 'react';
import Dobprint from './Dobprint';
class Dobclass extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1> 
                <Dobprint dob="19 March 1991">Jnanendra</Dobprint>
                <Dobprint dob="14 Nov 1989">Harish</Dobprint>
                <Dobprint dob="08 Jun 1955">Vijay</Dobprint>
            </div>
        );
    }
}

export default Dobclass;
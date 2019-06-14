import React, { Component } from 'react';
import Apievent from './Apievent';

class Restfullservice extends Component {
    render(){
        return (
            <Apievent list1={this.state.contact} list2={this.state.contact1} />
        )
    }
    state={
        contact:'',
        contact1:''
    };
    componentDidMount(){
        console.log("After componentDidMount");
        fetch('https://api.github.com/users/KrunalLathiya')
        .then(res => res.json())
        .then(data => {
            this.setState({contact:data})
        })
        .catch(console.log)

        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res1 => res1.json())
        .then(data1 => {
            this.setState({contact1:data1})
        })
        .catch(console.log)
    }
}
export default Restfullservice;
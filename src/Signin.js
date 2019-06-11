import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Signin.css';

function App() {
  return (
    <div className="App"> <div className="sign" >
        <br></br>
        <h2>Sign Up</h2><br></br>
     <label className="text">Name</label><br></br>
      <input className="box" type="text" name="name"></input><br></br><br></br>
      <label className="text2">Email</label><br></br>
      <input className="box" type="text" name="name"></input><br></br><br></br>
      <label className="text">Passwprd</label><br></br>
      <input className="box" type="text" name="name"></input><br></br><br></br>
      <label className="text1">ConformPassword</label><br></br>
      <input className="box" type="text" name="name"></input><br></br><br></br>
      <button className="button" >Create My Account</button></div>

    </div>
  );
}

export default App;
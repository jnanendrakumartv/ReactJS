import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Login.css';


function App() {
  return (
    <div className="App"><br></br><div className="body"><br></br>
        <h2><b>LogIn</b></h2><br></br>
     
      <input id="color" className="mail" type="text"  placeholder="EmailAdress"></input><br></br><br></br>
      <input id="color" className="pwd" type="text"  placeholder="Password"></input><br></br><br></br>
      <button className="button1" >Log In</button>
      <p><b>Forget Password ?</b></p></div>

    </div>
  );
}
export default App;
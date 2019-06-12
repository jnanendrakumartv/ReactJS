import React from 'react';
import logo from './logo.svg';
import './App.css';
 //import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
  import Ageclass from './task2/Ageclass';
  import Cityclass from './task2/Cityclass';
  // import Dobclass from './task2/Dobclass';
  import Login from './Login';
  //import Signin from'./task2/Signin';
//import Login from'./Login';

function App() {
  return (
    // <Router>
    //   <switch>
    //     <Route exact path='/' component={Signin}></Route>
    //     <Route exact path='/' component={Login}></Route>
    //   </switch>
    // </Router>
    <div className="App">
          <Ageclass title='Age'></Ageclass> 
        <Cityclass title='City'></Cityclass> 
         {/* <Dobclass title='Date Of Birth'></Dobclass>   */}

      <Login/>  
       {/* <Cityclass/> */}
       {/* <Signin/> */}
       {/* <Login/>  */}
     
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
 import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
  import Ageclass from './task2/Ageclass';
  import Cityclass from './task2/Cityclass';
  import Dobclass from './task2/Dobclass';
  import Login from './task2/Login';
  import Arithamaticoperation from './task3/Arithamaticoperation';
  import Eventchange from './task4/Eventchange';
 import Restfullservice from './task5/Restfullservice';
 
  //import Signin from'./Signin';
//import Login from'./Login';

function App() {
  return (
    <div>
    <Router>
      <switch>
        <Route exact path='/' component={Ageclass}></Route>
        <Route exact path='/1' component={Cityclass}></Route>
        <Route exact path='/2' component={Dobclass}></Route>
        <Route exact path='/task2' component={Login}></Route>
        <Route exact path='/task3' component={Arithamaticoperation}></Route>
        <Route exact path='/task4' component={Eventchange}></Route>
        <Route exact path='/task5' component={Restfullservice}></Route> 


      </switch>
    </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';

import { withRouter } from "react-router";

import Addrecord from './addrecord/addrecord';
import Homepage from './homepage/homepage';

import Login from './Login/login.js';

class App extends React.Component {

  render () {
    return(
      <React.Fragment>

       <Switch>
         <Route path="/login" component={Login} />
        <Route  path="/Addrecord" component={Addrecord}/>
        <Route  path="/homepage" component={Homepage}/>

       </Switch>


      </React.Fragment>
    );
  }
}



export default withRouter(App);

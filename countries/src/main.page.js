import React from 'react';
import {Import} from './_component';
import { Input } from './_component';
import logo from './world.svg';
import { withRouter } from "react-router-dom";
function Main(){
    return <div className="full-page">
        <img src={logo} className="App-logo"/>
      {/* <div className="App-input">
        <input type="text"/>
        <button>go</button>
      </div> */}

      <Input/>
    </div>
}
withRouter(Main);
export {Main};
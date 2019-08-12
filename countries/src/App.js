import React from 'react';
import {Main} from './main.page'
import {Country} from './country.page'
import './styles/App.scss';
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";

function App() {
  return<Router>
      <Route path="/" exact component={Main}/>
      <Route path="/country/:code" component={Country}/>
    </Router>
      
  
  
}

export default App;

import React, { Component } from 'react';

import {BrowserRouter} from 'react-router-dom';
import Home from './containers/Home/Home';

class App extends Component {
  render () {
    return (     
        <BrowserRouter basename="/home">
         <div className="App"> 
        <Home />
        {/* <Route path="/home" component={Home}/> */}
        </div>
        </BrowserRouter>
    );
  }

}

export default App;

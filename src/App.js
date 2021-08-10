import React, { Component } from "react";
import './App.css';

//Components!
import './components/NavBar.js'
import NavBar from './components/NavBar.js';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <NavBar />

      </div>
    )
  }
}

export default App;

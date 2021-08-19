import React, { Component } from "react";
import './App.css';

//Components!
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";


class App extends Component{
  render(){
    return(
      <div className='App'>
        <NavBar />

        <div className='ItemsContainer'>
          <ItemListContainer />
          <ItemCount initial={1}/>
        </div>
      </div>
    )
  }
}

export default App;

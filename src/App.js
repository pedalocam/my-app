import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = "#ffff";
let defaultStyle = {
  color: defaultTextColor
}

let titleStyle = {
  color: defaultTextColor,
  "font-size": "54px"
}


class Aggregate extends Component{
  render() {
    return(
      <div style={{...defaultTextColor, width: "40%", display: "inline-block"}}>
        <h2>Nummber Text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return(
      <div style={defaultStyle} >
        <img/>
        <input type="text"/>
      </div>  
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, width: "25%", display: "inline-block"}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul><p>Song 1</p><p>Song 1</p><p>Song 1</p></ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" style={defaultStyle}>      
        <h1 style={{...titleStyle}}>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

let defaultTextColor = "#ffff";
let defaultStyle = {
  color: defaultTextColor
}

let titleStyle = {
  color: defaultTextColor,
  "font-size": "54px"
}

let fakeServerData = {
  user:{
    name: "Peter",
  }
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
       
        <input type="text"/>
      </div>  
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, width: "25%", display: "inline-block"}}>
      
        <h3>Playlist Name</h3>
        <ul><p>Song 1</p><p>Song 1</p><p>Song 1</p></ul>
      </div>
    );
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    this.setState({serverData: fakeServerData});
  }
  render() {
    return (
      <div className="App" style={defaultStyle}>      
        <h1 style={{...titleStyle}}>
        {this.state.serverData && this.state.serverData.user.name}'s playlist</h1>
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

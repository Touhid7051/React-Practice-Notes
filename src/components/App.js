import React, {Component} from 'react';
import "./App.css";




class App extends Component{
  
  
  
  render(){
    let obj={
      backgroundColor:'skyblue',
    }
    return (
      <div className='App'>
        <h1 style={{obj}}>Hello Program</h1>
      </div>
    );
  }
}

export default App;

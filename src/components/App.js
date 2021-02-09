import React, {Component} from 'react';
import './App.css';
import Exp from './Exm';




class App extends Component{
  
  state={
    name:''
  }
  
  
  
  inputHandler=(event)=>{
    this.setState({
      name:event.target.value
    })
  }
  
  render(){
    return (
      <div className="App">
        <div className="container my-3">
          <input onChange={this.inputHandler} value={this.state.name} type="text" placeholder="Enter your name"/>
          <button className="btn btn-primary"
            onClick={(event)=>console.log(event)}>
            Click me!
          </button>
          {this.state.name ? <p>Hello,{this.state.name}</p>:''}
        
        </div>
        <Exp name={this.state.name}/>
      </div>
    );
  }
}

export default App;

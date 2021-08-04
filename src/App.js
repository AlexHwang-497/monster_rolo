import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// ! where is the component class located?
class App extends Component{
  constructor(){
    // todo: super calls the constructor on the Component class
    super()
    // *this.state exists on our class app through the superand compnent
    this.state ={
      string:'Hello Alex Hwang'
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          {/* we will change the <p></p> above when we press on the button */}
          <button onClick={()=>this.setState({string:'Hello Andrei!'})}>Change Text</button>
        </header>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

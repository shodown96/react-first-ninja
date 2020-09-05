import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja"

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
//       <Ninjas name='Ryu', age="30", belt='black',/>
//     </div>
//   );
// }

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja)=>{
    ninja.id = Math.random() * 10;
    // create a copy of the array to avoid directly editing the array because it is destructive
    // var nin = this.state.ninjas
    // nin.push(ninja)
    // shorter method using the spread operator [...x,new]
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas:ninjas
    })
    console.log(ninja)
  }
  deleteNinja = (id)=>{
    console.log(id)
    // let ninjas = this.state.ninjas
    // ninjas = delete ninjas[]
    let ninjas = this.state.ninjas.filter(ninja=>{
      return ninja.id !== id
    })
    this.setState({
      ninjas:ninjas
    })
  }
  componentDidMount(){
    console.log("component mounted")
  }
  componentDidUpdate(prevProps, prevState){
    console.log("component updated")
    console.log(prevProps, prevState)
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;

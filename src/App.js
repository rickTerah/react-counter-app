import React, { Component } from 'react';
import Counters from './components/Counters';
import Navbar from './components/Navbar'
class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 4},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
 }
 handleDelete = (counterId) => {
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({
         counters
     })
 }
 handleReset = () => {
     const counters = this.state.counters.map(c => {
         c.value = 0;
         return c;
     });
     this.setState({
         counters
     });

 }
 handleIncrement = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index].value++;
    this.setState({
        counters
    });
}
handleDecrement = counter => {
    const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index].value--;
    this.setState({
        counters
    });
} 

  render() { 
    return ( 
      <React-Fragment>
        <Navbar totalCounter={this.state.counters.filter(c => c.value > 0).length } />
        <div className="container">
         <Counters 
         counters={this.state.counters}
         onReset={this.handleReset}
         onIncrement={this.handleIncrement}
         onDelete={this.handleDelete}
         onDecrement={this.handleDecrement}
         />  
        </div>
        
      </React-Fragment>
     );
  }
}
 
export default App;

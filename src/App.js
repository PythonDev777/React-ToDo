import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true

      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true

      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: true

      }
    ]
  }
  markComplete = (id) => {
    console.log('Hello')
}
  render() {
    return (
      <div className="App">
        <Todos todos= {this.state.todos} markComplete = {this.markComplete}/>
      </div>
    );
  }
}
export default App;

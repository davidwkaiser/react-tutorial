import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var createReactClass = require('create-react-class')

// ReactDOM.render(<App />, document.getElementById('myDiv'));
    // ReactDOM.render(
    //     <h1>Hello, world!</h1>,
    //     document.getElementById('myDiv')
    // );

var Counter = createReactClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count+1
    });
  },
  getInitialState: function(){
    return{
      count: 0
    }
  },
  render: function (){
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
})

ReactDOM.render(
  <Counter  />,
  document.getElementById('myDiv')
  );


registerServiceWorker();

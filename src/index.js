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

var MyComponent = createReactClass({
  getInitialState: function(){
    return{
      count: 5
    }
  },
  render: function (){
    return (
      <h1>state.count - {this.state.count}</h1>
    );
  }
})

ReactDOM.render(
  <MyComponent name="Handsome" />,
  document.getElementById('myDiv')
  );


registerServiceWorker();

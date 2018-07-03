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

var FilteredList = createReactClass({
  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList})
  },
  getInitialState: function(){
    return {
      initialItems: [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ],
      items: []
    }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function (){
    return (
        <div className="filter-list">
          <input type="text" plceholder="Search" onChange={this.filterList}/>
          <List items={this.state.items}/>
          </div>
      );
  }
})

var List = createReactClass({
  render: function(){
    return(
      <ul>
      {this.props.items.map(function(item){
        return <li key={item}>{item}</li>
      })
    }
    </ul>
    )
  }
});


ReactDOM.render(
  <FilteredList />,
  document.getElementById('myDiv')
  );


registerServiceWorker();

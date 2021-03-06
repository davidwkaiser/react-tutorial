import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let createReactClass = require('create-react-class');

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
});

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

// import React, { Component } from 'react';
// import ReactDom from 'react-dom';
// import './index.css';

var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

//component will have state, and will also have lifestyle events, and will have UI
class App extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

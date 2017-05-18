// import React, { Component } from 'react';
// import ReactDom from 'react-dom';
// import './index.css';

var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

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

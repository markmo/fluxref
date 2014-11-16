var App = require('./components/app');

// must be defined after App otherwise "TypeError: Cannot call method 'emit' of undefined"
var React = require('react');

// react-devtools looks for an instance of React in the global scope
window.React = React;

React.render(
  <App/>,
  document.getElementById('main'));
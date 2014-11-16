var Dispatcher = require('./dispatcher');
var merge = require('react/lib/merge');

var AppDispatcher = merge(Dispatcher.prototype, {
  handleViewAction: function (action) {
    console.log('action', action);
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
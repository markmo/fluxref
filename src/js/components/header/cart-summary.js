var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/app-store');
var StoreWatchMixin = require('../../mixins/store-watch-mixin');

function _getCartTotals() {
  return AppStore.getCartTotals();
}

var CartSummary = React.createClass({

  mixins: [StoreWatchMixin(_getCartTotals)],

  render: function () {
    return (
      <div>
        <Link href="/cart" className="btn-btn-success">Cart Items: {this.state.qty} / ${this.state.total}</Link>
      </div>
    );
  }
});

module.exports = CartSummary;
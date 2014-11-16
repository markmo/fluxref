var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/app-store');
var RemoveFromCart = require('./remove-from-cart');
var Increase = require('./increase');
var Decrease = require('./decrease');
var StoreWatchMixin = require('../../mixins/store-watch-mixin');

function _getCartItems() {
  return {items: AppStore.getCart()};
}

var Cart = React.createClass({

  mixins: [StoreWatchMixin(_getCartItems)],

  render: function () {
    var total = 0;
    var items = this.state.items.map(function (item, i) {
      var subtotal = item.cost * item.qty;
      total += subtotal;
      return (
        <tr key={i}>
          <td><RemoveFromCart index={i}/></td>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>
            <Increase index={i}/>
            <Decrease index={i}/>
          </td>
          <td>${subtotal}</td>
        </tr>
      );
    });
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Qty</th>
              <th></th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-right">Total</td>
              <td>${total}</td>
            </tr>
          </tfoot>
        </table>
        <Link href="/">Continue Shopping</Link>
      </div>
    );
  }
});

module.exports = Cart;
var React = require('react');
var AppStore = require('../../stores/app-store');
var AddToCart =  require('./add-to-cart');
var CatalogItem = require('./catalog-item');
var StoreWatchMixin = require('../../mixins/store-watch-mixin');

function _getCatalog() {
  return {items: AppStore.getCatalog()};
}

var Catalog = React.createClass({

  mixins: [StoreWatchMixin(_getCatalog)],

  render: function () {
    var items = this.state.items.map(function (item) {
      return <CatalogItem key={item.id} item={item}/>
    });
    return (
      <div className="row">
        {items}
      </div>
    );
  }
});

module.exports = Catalog;
var React = require('react');
var Router = require('react-router-component');
var Layout = require('./layout');
var Catalog = require('./catalog/catalog');
var Cart = require('./cart/cart');
var CatalogDetail = require('./product/catalog-detail');

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
  render: function () {
    return (
      <Layout>
        <Locations>
          <Location path="/" handler={Catalog}/>
          <Location path="/cart" handler={Cart}/>
          <Location path="/item/:item" handler={CatalogDetail}/>
        </Locations>
      </Layout>
    );
  }
});

module.exports = App;
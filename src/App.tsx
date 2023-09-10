import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList/ProductList';
import Pricing from './components/Pricing/Pricing';

const App = () => (
  <div className="container">
    <ProductList />
    {/* <Pricing /> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));

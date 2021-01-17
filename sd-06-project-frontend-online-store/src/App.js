import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/carrinho" component={ ShoppingCart } />
            <Route path="/checkout" component={ Checkout } />
            <Route path="/:id" render={ (props) => <ProductDetails { ...props } /> } />
            <Route path="/" component={ Home } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

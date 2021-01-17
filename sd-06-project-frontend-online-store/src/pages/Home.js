import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CartButton from '../components/CartButton';
import CardList from '../components/CardList';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>E-Cornmerce</h1>
        <div className="nav-container">
          <SearchBar />
          <Link to="/carrinho">
            <CartButton />
          </Link>
        </div>
        <CardList />
      </div>
    );
  }
}

export default Home;

// src/components/Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from '../assets/myapp-jessilis.svg';

const Menu = () => {
  return (
    <header className="menu">
      <div className="menu-container">
        <Link to="/" className="logo">
          <img src={logo} alt="MyApp Logo" className="logo-img" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/game">Карточки</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;




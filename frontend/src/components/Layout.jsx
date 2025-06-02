import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';

function Layout({ children }) {
  return (
    <div className="site-container">
      <header className="site-header">
        <a href="/" className="site-title">FoodDelivery</a>
        <nav className="site-nav">
          <Link to="/order">
            <button>Посмотреть заказ</button>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} FoodDelivery. Свяжитесь с нами.</span>
      </footer>
    </div>
  );
}

export default Layout;
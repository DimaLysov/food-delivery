import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './components/Layout';
import CategoryProducts from './pages/CategoryProducts';
import OrderPage from './pages/OrderPage';



function App() {
  return (
    <div className="App">
      <Router>
      <div className="app">
        <Layout>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<CategoryProducts />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </main>
        </Layout>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
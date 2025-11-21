import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ProductsGrid from './components/ProductGrid';
import './App.css';
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export default function App() {
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    fetch(`${API_BASE}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filtered = products.filter(p => filterCategory === 'All' ? true : p.category === filterCategory);

  return (
    <div>
      <header className="header">
        <div className="logo">Shopify</div>
        <SearchBar apiBase={API_BASE} onSelect={(name) => {
          // on suggestion click, optionally you could filter products by name
          console.log('Selected suggestion:', name);
        }} />
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-text">
            <h1>Welcome to Shopify</h1>
            <p>Best products at unbeatable prices</p>
          </div>
          <img src="/8852975.jpg" alt="banner" className="hero-img"/>
        </section>

        <section className="controls">
          <label>
            Category:
            <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
        </section>

        <ProductsGrid products={filtered} />
      </main>

      <footer className="footer">Copyright © 2025 Shopify</footer>
    </div>
  );
}

import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsGrid({ products = [] }) {
  return (
    <section className="grid">
      {products.map(p => <ProductCard key={p._id || p.name} product={p} />)}
    </section>
  );
}

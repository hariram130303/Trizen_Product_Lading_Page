import React from 'react';

export default function ProductCard({ product }) {
  const stars = Math.round(product.rating || 0);
  return (
    <div className="card">
      <img src={`http://localhost:5000${product.image}`} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <div className="card-price">₹{product.price}</div>
        <div className="card-rating">
          {Array.from({length: 5}).map((_,i) => <span key={i}>{i < stars ? '⭐' : '☆'}</span>)}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product, onAddToOrder }) {
  const [amount, setAmount] = useState(1);

  const handleDecrease = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setAmount((prev) => prev + 1);
  };

  const handleAdd = () => {
    onAddToOrder(product.id, amount);
  };

  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Цена: {product.cost} руб.</p>
      <p>Состав: {product.composition}</p>
      <div className="amount-controls">
        <button onClick={handleDecrease}>-</button>
        <span>{amount}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={handleAdd}>Добавить в заказ</button>
    </div>
  );
}

export default ProductCard;

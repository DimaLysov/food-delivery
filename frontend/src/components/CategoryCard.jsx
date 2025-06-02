import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoryCard.css';

function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.id}`} className="category-card-link">
      <div className="category-card">
        <img src={category.image_url} alt={category.name} className="category-card-image" />
        <h3 className="category-card-title">{category.name}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;

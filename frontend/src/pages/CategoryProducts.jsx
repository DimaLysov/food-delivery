import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProductsCategory } from '../api/product';
import { addItemOrder } from '../api/order';
import { getСategory } from '../api/category';

import ProductCard from '../components/ProductCard';
import '../styles/CategoryProducts.css';

function CategoryProducts() {
  const { id } = useParams();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const dataProduct = await getProductsCategory(id);
      setProducts(dataProduct);
      const dataCategory = await getСategory(id);
      console.log(dataCategory);
      setCategory(dataCategory);
    };
    fetchData();
  }, [id]);

  const handleAddToOrder = async (productId, amount) => {
    setLoading(true);
    setMessage('');
    try {
        const requestBody = {
      amount: amount,
      product: productId,
    };
      await addItemOrder(requestBody);
      setMessage('Товар добавлен в заказ!');
    } catch (e) {
      setMessage('Ошибка при добавлении в заказ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="category-products-title">Товары категории {category.name}</h1>
      {message && <div className="category-products-message">{message}</div>}
      <div className="category-products-list">
        {products.length === 0 && <p>Нет товаров в этой категории.</p>}
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToOrder={handleAddToOrder} />
        ))}
      </div>
      {loading && <div className="category-products-loading">Добавление в заказ...</div>}
    </div>
  );
}

export default CategoryProducts;

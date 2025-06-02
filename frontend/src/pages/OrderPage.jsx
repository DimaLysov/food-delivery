import React, { useEffect, useState } from 'react';
import { updateOrderAmount, getItemsOrder, deleteItemOrder} from '../api/order';
import '../styles/OrderPage.css';

function OrderPage() {
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getItemsOrder();
        setOrderItems(data);
      } catch (e) {
        setError('Ошибка при загрузке заказа');
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, []);

  const updateItems = async () => {
    try {
      const data = await getItemsOrder();
      setOrderItems(data);
    } catch (e) {
      alert('Ошибка при обновлении заказа');
    }
  }

  const handleAmountChange = async (itemId, currentAmount, delta) => {
    const newAmount = currentAmount + delta;
    if (newAmount < 1) return;
    const requestBody = {
      amount: newAmount,
    };
    try {
      await updateOrderAmount(itemId, requestBody);
      await updateItems();
    } catch (e) {
      alert('Ошибка при обновлении количества');
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await deleteItemOrder(itemId);
      await updateItems();
    } catch (e) {
      alert('Ошибка при удалении товара из заказа');
    }
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="order-title">Ваш заказ</h1>
      {orderItems.length === 0 ? (
        <p className="order-empty">В заказе нет товаров.</p>
      ) : (
        <ul className="order-list">
          {orderItems.map(item => (
            <li key={item.id}>
              <img src={item.image_url} alt={item.name} />{' '}
              <b>{item.name}</b> — 
              <span className="order-amount-controls">
                <button onClick={() => handleAmountChange(item.id, item.amount, -1)}>-</button>
                <span>{item.amount}</span>
                <button onClick={() => handleAmountChange(item.id, item.amount, 1)}>+</button>
              </span>
              {' '}шт. — {item.cost * item.amount} руб.
              <button onClick={() => handleDelete(item.id)} style={{ marginLeft: 8 }}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderPage;

const BASE_URL = process.env.REACT_APP_PATH_URL_API;

export const addItemOrder = async (requestBody) => {
  const response = await fetch(`${BASE_URL}/order/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  if (!response.ok) {
    throw new Error(`Ошибка при добавлении продукта в заказ: ${response.statusText}`);
}
  return await response.json();
};

export const getItemsOrder = async () => {
    const response = await fetch(`${BASE_URL}/order/`);
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных продуктов заказа');
    }
    return await response.json();
  };

export const updateOrderAmount = async (id, requestBody) => {
    console.log('updateOrderAmount', id, requestBody);
  const response = await fetch(`${BASE_URL}/order/${id}/update-amount/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  if (!response.ok) {
    throw new Error('Ошибка при обновлении количества');
  }
  return await response.json();
};

export const deleteItemOrder = async (id) => {
  const response = await fetch(`${BASE_URL}/order/${id}/`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Ошибка при удалении продукта из заказа');
  }
  return;
};


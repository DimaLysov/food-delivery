const BASE_URL = process.env.REACT_APP_PATH_URL_API;

export const getProducts = async () => {
    const response = await fetch(`${BASE_URL}/product/`);
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных продуктов');
    }
    return await response.json();
  };

export const getProductsCategory = async (category_id) => {
    const response = await fetch(`${BASE_URL}/product/by-category/${category_id}/`);
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных продуктов');
    }
    return await response.json();
  };
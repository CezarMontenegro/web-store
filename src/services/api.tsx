import axios from 'axios';

export async function getCategories() {
  try {
    const res = await axios('https://api.mercadolibre.com/sites/MLB/categories');
    return res.data;
  } catch (error) {
    console.error('Erro ao obter categorias:', error);
    throw error;
  }
}

export async function getProductByQuery(QUERY: string) {
  try {
    const res = await axios(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
    return res.data;
  } catch (error) {
    console.error('Erro ao obter produtos por consulta:', error);
    throw error;
  }
}

export async function getProductByCategory(CATEGORY_ID: string) {
  try {
    const res = await axios(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`);
    return res.data;
  } catch (error) {
    console.error('Erro ao obter produtos por categoria:', error);
    throw error;
  }
}

export async function getProductByCategoryAndQuery(CATEGORY_ID: string, QUERY: string) {
  try {
    const res = await axios(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`);
    return res.data;
  } catch (error) {
    console.error('Erro ao obter produtos por categoria e consulta:', error);
    throw error;
  }
}

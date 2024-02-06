import {createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import axios from 'axios';

//INTERFACES
interface Props {
  children: ReactNode;
}

interface Category {
  id: string;
  name: string;
}

interface ProductsByCategory {
  thumbnail: string;
  title: string ;
  original_price: number;
  price: number;
  shipping: {free_shipping: boolean};
}

interface APIContextData {
  productsByCategory: ProductsByCategory[];
  setProductsByCategory: Dispatch<SetStateAction<ProductsByCategory[]>>
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
  categoryId: string;
  setCategoryId: Dispatch<SetStateAction<string>>;
  getCategories: () => Promise<void>;
  getProductsByCategory: (CATEGORY_ID: string) => Promise<void>;
  getProductByQuery: (QUERY: string) => Promise<void>;
  getProductByCategoryAndQuery: (CATEGORY_ID: string, QUERY: string) => Promise<void>;
}

//CRIAÇÃO DO CONTEXTO
export const APIContext = createContext({} as APIContextData);

//PROVIDER 
function APIContextProvider({children}: Props) {
  //ESTADOS
  const [productsByCategory, setProductsByCategory] = useState<ProductsByCategory[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState<string>('');

  //FUNCOES
  const getCategories = async () => {
    try {
      const response = await axios.get('https://api.mercadolibre.com/sites/MLB/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error)
    }
  }

  const getProductsByCategory = async (CATEGORY_ID: string) => {
    try {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`);
      setProductsByCategory(response.data.results);
      setCategoryId(CATEGORY_ID);
    } catch (error) {
      console.error(error)
    }
  }

  const getProductByQuery = async (QUERY: string) => {
    try {
      const response = await axios(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
      setProductsByCategory(response.data.results);
    } catch (error) {
      console.error('Erro ao obter produtos por consulta:', error);
      throw error;
    }
  }

  const getProductByCategoryAndQuery = async (CATEGORY_ID: string, QUERY: string) => {
    try {
      const response = await axios(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`);
      setProductsByCategory(response.data.results);
    } catch (error) {
      console.error('Erro ao obter produtos por categoria e consulta:', error);
      throw error;
    }
  }

  const contextValue = {
    productsByCategory,
    setProductsByCategory,
    categories,
    setCategories,
    categoryId,
    setCategoryId,
    getCategories,
    getProductsByCategory,
    getProductByQuery,
    getProductByCategoryAndQuery,
  }

  return (
    <APIContext.Provider value={contextValue}>
      { children }
    </APIContext.Provider>
  );
}

export default APIContextProvider;

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

interface ProductsList {
  id: string;
  thumbnail: string;
  title: string;
  original_price: number;
  price: number;
  shipping: {free_shipping: boolean};
}

interface ProductDetails {
  id: string;
  thumbnail: string;
  title: string ;
  initial_quantity: number;
  original_price: number;
  price: number;
  shipping: {free_shipping: boolean};
  attributes: {id: string, name: string, value_name: string}[];
}

interface APIContextData {
  productsList: ProductsList[];
  setProductsList: Dispatch<SetStateAction<ProductsList[]>>
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
  categoryId: string;
  setCategoryId: Dispatch<SetStateAction<string>>;
  wasFirstSearchMade: boolean;
  setWasFirstSearchMade: Dispatch<SetStateAction<boolean>>;
  getCategories: () => Promise<void>;
  getProductsByCategory: (CATEGORY_ID: string) => Promise<void>;
  getProductByQuery: (QUERY: string) => Promise<void>;
  getProductByCategoryAndQuery: (CATEGORY_ID: string, QUERY: string) => Promise<void>;
  getProductDetails: (id: string) => Promise<ProductDetails>;
}

//CRIAÇÃO DO CONTEXTO
export const APIContext = createContext({} as APIContextData);

//PROVIDER 
function APIContextProvider({children}: Props) {
  //ESTADOS
  const [productsList, setProductsList] = useState<ProductsList[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState<string>('');
  const [wasFirstSearchMade, setWasFirstSearchMade] = useState<boolean>(false);

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
      setProductsList(response.data.results);
      setCategoryId(CATEGORY_ID);
    } catch (error) {
      console.error(error)
    }
  }

  const getProductByQuery = async (QUERY: string) => {
    try {
      const response = await axios(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
      setProductsList(response.data.results);
    } catch (error) {
      console.error('Erro ao obter produtos por consulta:', error);
      throw error;
    }
  }

  const getProductByCategoryAndQuery = async (CATEGORY_ID: string, QUERY: string) => {
    try {
      const response = await axios(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`);
      setProductsList(response.data.results);
    } catch (error) {
      console.error('Erro ao obter produtos por categoria e consulta:', error);
      throw error;
    }
  }

  async function getProductDetails(id: string) {
    try {
      const response = await axios(`https://api.mercadolibre.com/items/${id}`)
      return (response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const contextValue = {
    productsList,
    setProductsList,
    categories,
    setCategories,
    categoryId,
    setCategoryId,
    wasFirstSearchMade,
    setWasFirstSearchMade,
    getCategories,
    getProductsByCategory,
    getProductByQuery,
    getProductByCategoryAndQuery,
    getProductDetails,
  }

  return (
    <APIContext.Provider value={contextValue}>
      { children }
    </APIContext.Provider>
  );
}

export default APIContextProvider;

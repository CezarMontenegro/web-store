import {createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import axios from 'axios';
import { Category } from "../pages/home/Home";

//INTERFACES
interface Props {
  children: ReactNode;
}

interface APIContextData {
  productsByCategory: any[];
  setProductsByCategory: Dispatch<SetStateAction<any[]>>
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
  getCategories: () => Promise<void>;
  getProductsByCategory: (CATEGORY_ID: string) => Promise<void>;
}

//CRIAÇÃO DO CONTEXTO
export const APIContext = createContext({} as APIContextData);

//PROVIDER 
function APIContextProvider({children}: Props) {
  //ESTADOS
  const [productsByCategory, setProductsByCategory] = useState<any[]>([]);
  const [categories, setCategories] = useState<Category[]>([])

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
    } catch (error) {
      console.error(error)
    }
  }

  const contextValue = {
    productsByCategory,
    setProductsByCategory,
    categories,
    setCategories,
    getCategories,
    getProductsByCategory,
  }

  return (
    <APIContext.Provider value={contextValue}>
      { children }
    </APIContext.Provider>
  );
}

export default APIContextProvider;

import { createContext, useState } from "react";

export const APIContext = createContext({

});

function APIContextProvider({ children }) {
  const [productsByCategory, setProductsByCategory] = useState<any[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [productsByCategory, setProductsByCategory] = useState<any[]>([]);
  const [categories, setCategories] = useState<Category[]>([])

  const getCategories = async () => {
    try {
      const response = await axios.get('https://api.mercadolibre.com/sites/MLB/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getCategories()
  },[])

  const getProductsByCategory = async (CATEGORY_ID: string) => {
    try {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`);
      setProductsByCategory(response.data.results);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <APIContext.Provider value={contextValue}>
      {children}
    </APIContext.Provider>
  );
}

export default APIContextProvider;

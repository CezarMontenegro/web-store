import { useContext, useEffect, useState } from "react";

import Card from "../card/Card";

import { APIContext } from "../../context/APIContext";

import { Container } from './Main.styles';

type ListOrderOptions = 'ascending' | 'descending' | 'relevance';

interface ProductList {
  id: string;
  thumbnail: string;
  title: string;
  original_price: number;
  price: number;
  shipping: {free_shipping: boolean};
  order_backend: number;
}

function Main() {
  const { productList, wasFirstSearchMade } = useContext(APIContext);
  const [usableProductList, setUsableProductList] = useState<ProductList[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [listOrderOption, setListOrderOption] = useState<ListOrderOptions>('relevance');

  
  useEffect(() => {
    setUsableProductList(productList);
  }, [productList, listOrderOption]);

  useEffect(() => {
    setListOrderOption('relevance');
    setIsChecked(false)
  }, [productList])

  function sortProductListByPrice() {
    const options = {
      relevance: [...usableProductList].sort((a, b) => a.order_backend - b.order_backend),
      ascending: [...usableProductList].sort((a, b) => a.price - b.price),
      descending: [...usableProductList].sort((a, b) => b.price - a.price),
    }

    const updatedProductList = options[listOrderOption];
    setUsableProductList(updatedProductList);
  }
  useEffect(() => {
    sortProductListByPrice();
  }, [listOrderOption]);


  function filterByFreeShipping(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked((prev) => !prev);

    const options = {
      relevance: [...productList].sort((a, b) => a.order_backend - b.order_backend),
      ascending: [...productList].sort((a, b) => a.price - b.price),
      descending: [...productList].sort((a, b) => b.price - a.price),
    }

    if (e.target.checked) {
      const updatedProductList = options[listOrderOption].filter((product) => product.shipping.free_shipping === true);
      setUsableProductList(updatedProductList);
    }  
    
    if (!e.target.checked) {
      const updatedProductList = options[listOrderOption];
      setUsableProductList(updatedProductList);
    }
  }
  
  console.log(productList)
  return (
    <Container>
      {(!usableProductList.length && !wasFirstSearchMade) && (
        <div>
          Digite o nome de um produto ou escolha uma categoria.
        </div>
      )}
      {(!usableProductList.length && wasFirstSearchMade) && (
        <div>
          Nenhum produto foi encontrado.
        </div>
      )}
      {usableProductList.length > 0 && (
        <div className="main-container">
          <div className="info"> 
            <div>{`Foram achados ${productList.length} produtos`}</div>
            <div className="filter-order-container">
              <div className="filter">
                <p>Frete Grátis</p>
                <input 
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => filterByFreeShipping(e)}
                />
              </div>
              <div className="dropdown-list">
                <p>Ordernar por:</p>
                <select
                  className="order-list"
                  value={listOrderOption}
                  onChange={(e) => setListOrderOption(e.target.value as ListOrderOptions)}
                >
                  <option value="relevance">Relevância</option>
                  <option value="ascending">Menor Preço</option>
                  <option value="descending">Maior Preço</option>
                </select>
              </div>
            </div>
          </div>
          <div className="cards-container">
          {usableProductList.map((product) => {
          return (
            <Card
                key={product.id}
                id={product.id}
                img={product.thumbnail}
                title={product.title}
                originalPrice={product.original_price}
                price={product.price}
                shipping={product.shipping.free_shipping}
              />
          )
        })}
          </div>
        </div>

      )}
    </Container>
  )
}

export default Main
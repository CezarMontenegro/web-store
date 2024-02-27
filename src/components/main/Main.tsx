import { useContext, useEffect, useState } from "react";

import Card from "../card/Card";

import { APIContext } from "../../context/APIContext";

import { Container } from './Main.styles';

type ListOrderOptions = 'ascending' | 'descending' | 'relevance';

function Main() {
  const [listOrderOptions, setListOrderOptions] = useState<ListOrderOptions>('relevance');
  const { productList, setProductList, wasFirstSearchMade } = useContext(APIContext);

  function sortProductListByPrice() {
    const options = {
      relevance: [...productList].sort((a, b) => a.order_backend - b.order_backend),
      ascending: [...productList].sort((a, b) => a.price - b.price),
      descending: [...productList].sort((a, b) => b.price - a.price),
    }

    const updatedProductList = options[listOrderOptions];
    setProductList(updatedProductList);
  }
  useEffect(() => {
    sortProductListByPrice();
  }, [listOrderOptions])

  console.log(productList)
  return (
    <Container>
      {(!productList.length && !wasFirstSearchMade) && (
        <div>
          Digite o nome de um produto ou escolha uma categoria.
        </div>
      )}
      {(!productList.length && wasFirstSearchMade) && (
        <div>
          Nenhum produto foi encontrado.
        </div>
      )}
      {productList.length > 0 && (
        <div className="main-container">
          <div className="info"> 
            <div>{`Foram achados ${productList.length} produtos`}</div>
            <div className="dropdown-list">
              <p>Ordernar por:</p>
              <select
                className="order-list"
                // onChange={(e) => setListOrder(e.target.value as ListOrderOptions)}
                onChange={(e) => setListOrderOptions(e.target.value as ListOrderOptions)}
              >
                <option value="relevance">Relevância</option>
                <option value="ascending">Menor Preço</option>
                <option value="descending">Maior Preço</option>
              </select>
            </div>
          </div>
          <div className="cards-container">
          {productList.map((product) => {
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
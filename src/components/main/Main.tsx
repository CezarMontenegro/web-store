import { useContext } from "react";

import Card from "../card/Card";

import { APIContext } from "../../context/APIContext";

import { Container } from './Main.styles';

function Main() {
  const { productsList, wasFirstSearchMade } = useContext(APIContext);
  console.log(productsList);
  return (
    <Container>
      {(!productsList.length && !wasFirstSearchMade) && (
        <div>
          Digite o nome de um produto ou escolha uma categoria.
        </div>
      )}
      {(!productsList.length && wasFirstSearchMade) && (
        <div>
          Nenhum produto foi encontrado.
        </div>
      )}
      {(productsList.length > 0) && productsList.map((product) => {
        return (
          <Card
            img={product.thumbnail}
            title={product.title}
            originalPrice={product.original_price}
            price={product.price}
            shipping={product.shipping.free_shipping}
          />
        )
      })}
    </Container>
  )
}

export default Main
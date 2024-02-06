import { useContext } from "react";

import Card from "../card/Card";

import { APIContext } from "../../context/Context";

import { Container } from './Main.styles';

function Main() {
  const { productsByCategory } = useContext(APIContext)
  return (
    <Container>
      {!productsByCategory.length && (
        <div>
          Digite o nome de um produto ou escolha uma categoria.
        </div>
      )}
      {(productsByCategory.length > 0) && productsByCategory.map((product) => {
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
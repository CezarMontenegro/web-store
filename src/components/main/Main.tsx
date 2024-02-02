import Card from "../card/Card"

import { Container } from './Main.styles';

interface Props {
  productsByCategory: any[]
}

function Main({productsByCategory}: Props) {
  console.log(productsByCategory)
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
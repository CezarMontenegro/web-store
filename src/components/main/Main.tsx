import Card from "../card/Card"

import { Container } from './Main.styles';

interface Props {
  productsByCategory: any[]
}

function Main({productsByCategory}: Props) {
  console.log(productsByCategory)
  return (
    <Container>
      {productsByCategory.map((product) => {
        return (
          <Card
            title={product.title}
            price={product.price}
            img={product.thumbnail}
          />
        )
      })}
    </Container>
  )
}

export default Main
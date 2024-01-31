import { Container } from './Card.styles';

interface Props {
  name: string;
  price: number;
  img: string;
}

function Card({ name, price, img }: Props) {
  return (
    <Container>
      <div>{name}</div>
      <div>
        <img src={img} alt="" />
        <span>{price}</span>
      </div>
    </Container>
  )
}

export default Card;
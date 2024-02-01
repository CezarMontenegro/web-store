import { Container } from './Card.styles';

interface Props {
  title: string;
  price: number;
  img: string;
}

function Card({title, price, img }: Props) {
  return (
    <Container>
      <div>
        <div className="img">
          <img src={img} alt={title}/>
        </div>
        <div className="title">{title}</div>
        <div className="price">R$ {price}</div>
      </div>
    </Container>
  )
}

export default Card;
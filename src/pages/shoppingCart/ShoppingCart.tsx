import { Container } from './ShoppingCart.styles';

function ShoppingCart() {
  return (
    <Container>
      <div className='title'>
        <i className="fa-solid fa-cart-shopping"></i>
        <h4>Carrinho de compras</h4>
      </div>
      <i className="fa-solid fa-arrow-left"></i>
    </Container>
  )
}

export default ShoppingCart;
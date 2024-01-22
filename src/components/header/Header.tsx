import { Container } from './Header.styles';

function Header() {
  return (
    <Container>
      <img src="../../public/mercado-livre.svg" alt="logo" />
      <input
        type="text"
        name="search-input"
        placeholder="Buscar produtos, marcas e muito mais..." 
        maxLength={120}
      />
      <div>
        <span>Login</span>
        <span>Carrinho de compras</span>
      </div>
    </Container>
  )
}



export default Header;
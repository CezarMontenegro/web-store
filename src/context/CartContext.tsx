import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

//INTERFACES
interface Props {
  children: ReactNode;
}

interface CartProducts {
  id: number;
  qty: number;
}

interface CartContextData {
  cartProducts: CartProducts[];
  setCartProducts: Dispatch<SetStateAction<CartProducts[]>>
}

export const CartContext = createContext({} as CartContextData);

function CartContextProvider({children}: Props) {
  const [cartProducts, setCartProducts] = useState<CartProducts[]>([]);

  const contextValue = {
    cartProducts,
    setCartProducts,
  }

  return (
    <CartContext.Provider value={contextValue}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

//INTERFACES
interface Props {
  children: ReactNode;
}

interface CartProducts {
  id: string | undefined;
  qty: number;
  title: string;
  price: number;
  thumbnail: string;
  maximunStock: number;
}

interface CartContextData {
  cartProductList: CartProducts[];
  setCartProductList: Dispatch<SetStateAction<CartProducts[]>>
}

export const CartContext = createContext({} as CartContextData);

function CartContextProvider({children}: Props) {
  const [cartProductList, setCartProductList] = useState<CartProducts[]>([]);

  const contextValue = {
    cartProductList,
    setCartProductList,
  }

  return (
    <CartContext.Provider value={contextValue}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;
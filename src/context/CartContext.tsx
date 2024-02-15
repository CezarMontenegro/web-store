import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

//INTERFACES
interface Props {
  children: ReactNode;
}

interface CartContextData {
  qty: number;
  setQty: Dispatch<SetStateAction<number>>
}

export const CartContext = createContext({} as CartContextData);

function CartContextProvider({children}: Props) {
  const [qty, setQty] = useState(0);

  const contextValue = {
    qty,
    setQty
  }

  return (
    <CartContext.Provider value={contextValue}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;
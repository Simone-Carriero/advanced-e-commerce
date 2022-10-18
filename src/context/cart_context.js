import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

const getLocalStorage = () => {
  const localStorageItem = localStorage.getItem('cart');

  return localStorageItem ? JSON.parse(localStorageItem) : [];
};

const initialState = {
  cart_item: getLocalStorage(),
  cart_item_amount: 0,
  cart_total: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart_item));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart_item]);

  const addToCart = (id, currentColor, amount, singleProduct) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, currentColor, amount, singleProduct },
    });
  };
  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  const toggleCartItemAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const value = {
    ...state,
    addToCart,
    removeCartItem,
    toggleCartItemAmount,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};

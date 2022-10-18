import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const {
      id,
      currentColor: color,
      amount,
      singleProduct: product,
    } = action.payload;

    const item = state.cart_item.find((item) => item.id === id);

    if (!item) {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart_item: [...state.cart_item, newItem],
      };
    } else {
      const tempCart = state.cart_item.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart_item: tempCart };
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const newCart = state.cart_item.filter(
      (item) => item.id !== action.payload
    );
    return {
      ...state,
      cart_item: newCart,
    };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart_item.map((item) => {
      if (item.id === id) {
        if (value === 'inc') {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === 'dec') {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart_item: tempCart };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const totalPrice = state.cart_item.reduce(
      (tot, item) => tot + item.amount * item.price,
      0
    );

    const totalAmount = state.cart_item.reduce(
      (tot, item) => tot + item.amount,
      0
    );
    return {
      ...state,
      cart_total: totalPrice,
      cart_item_amount: totalAmount,
    };
  }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart_item: [],
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;

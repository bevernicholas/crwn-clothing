import { ItemType } from '../../types';
import { CartActionTypes } from './cart.types';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE= {
  hidden: true,
  cartItems: []
};

const cartReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default:
      return INITIAL_STATE;
  }
}

export default cartReducer;
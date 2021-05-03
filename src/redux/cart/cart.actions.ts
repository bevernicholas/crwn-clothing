import { CartActionTypes } from './cart.types';

import { ItemType } from '../../types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: ItemType) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = (item: ItemType) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeitem = (item: ItemType) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});
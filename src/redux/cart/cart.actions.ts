import { CartActionTypes } from './cart.types';

import { ItemType } from '../../types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: ItemType) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
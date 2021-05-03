import { createSelector } from 'reselect';

import { ItemType } from '../../types';

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart: any) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart: any) => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: any) => cartItems.reduce((accumulatedQuantity: number, cartItem: any) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: ItemType[]) =>
    cartItems.reduce(
      (accumulatedQuantity: number, cartItem: any) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
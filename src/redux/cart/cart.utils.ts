import { ItemType } from '../../types';

export const addItemToCart = (cartItems: ItemType[], cartItemToAdd: ItemType) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity ? cartItem.quantity + 1 : 1,
          }
        : cartItem
    );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}];
}
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
};

export const clearItemFromCart = (cartItems: ItemType[], cartItemToClear: ItemType) => {
  return cartItems.filter((cartItem: ItemType) => cartItem.id !== cartItemToClear.id);
}

export const removeItemFromCart = (cartItems: ItemType[], cartItemToRemove: ItemType) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  if (existingCartItem && existingCartItem.quantity && existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity - 1 : null }
      : cartItem
  );
}
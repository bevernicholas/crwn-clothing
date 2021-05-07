import { createSelector } from 'reselect';

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop: any) => shop.collections
);
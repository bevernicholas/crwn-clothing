import { createSelector } from 'reselect';

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop: any) => shop.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop: any) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop: any) => !!shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => collections ? Object.keys(collections).map((key: any) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam: string): any =>
  createSelector(
    [selectCollections],
    (collections) => collections ? collections[collectionUrlParam] : null
  );
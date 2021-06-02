import ShopActionTyps from './shop.types';

export const updateCollections = (collectionsMap: any) => ({
  type: ShopActionTyps.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
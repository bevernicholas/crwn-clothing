import ShopActionTyps from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActionTyps.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap: any) => ({
  type: ShopActionTyps.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (error: any) => ({
  type: ShopActionTyps.FETCH_COLLECTIONS_FAILURE,
  payload: error
});

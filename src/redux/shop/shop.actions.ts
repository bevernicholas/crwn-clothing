import ShopActionTyps from './shop.types';
import { Dispatch } from 'redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

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

export const fetchCollectionsStartAsync = () => {
  return (dispatch: Dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => {
      dispatch(fetchCollectionsFailure(error));
    });
  }
}
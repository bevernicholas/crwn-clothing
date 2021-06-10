import ShopActionTyps from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ShopActionTyps.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTyps.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      };
    case ShopActionTyps.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;
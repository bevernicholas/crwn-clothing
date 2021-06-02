import SHOP_DATA from './shop.data';
import ShopActionTyps from './shop.types';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ShopActionTyps.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
}

export default shopReducer;
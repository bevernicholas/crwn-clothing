import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { ItemType } from '../../types';

import './collection-item.styles.scss';

interface CollectionItemProps {
  item: ItemType;
  addItem: any;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
      </div> 
      <CustomButton onClick={() => addItem(item)} inverted> ADD TO CART </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
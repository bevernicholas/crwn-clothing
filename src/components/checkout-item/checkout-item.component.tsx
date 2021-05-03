import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeitem } from '../../redux/cart/cart.actions';

import { ItemType } from '../../types';

import './checkout-item.styles.scss';

interface CheckoutItemProps {
  item: ItemType;
  clearItemFromCart: any;
  addItem: any,
  removeItem: any
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ item, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (<div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div onClick={() => removeItem(item)} className="arrow">&#10094;</div>
        <span className="vale">
          {quantity}
        </span>
      <div onClick={() => addItem(item)} className="arrow">&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div onClick={() => {clearItemFromCart(item)}}  className="remove-button">&#10005;</div>
  </div>);
};

const mapDispatchToProps = (dispatch: any) => ({
  clearItemFromCart: (item: ItemType) => dispatch(clearItemFromCart(item)),
  addItem: (item: ItemType) => dispatch(addItem(item)),
  removeItem: (item: ItemType) => dispatch(removeitem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
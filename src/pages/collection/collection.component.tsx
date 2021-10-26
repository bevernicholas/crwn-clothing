import React from 'react';
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { ItemType } from '../../types';

import './collection.styles.scss';

type CollectionParams = {
  collectionId: string;
}

const CollectionPage: React.FC<any> = () => {
  const { collectionId } = useParams<CollectionParams>();
  const collection: any = useSelector(selectCollection(collectionId));
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: ItemType) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;


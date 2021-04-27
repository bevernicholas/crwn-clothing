import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import { ItemType } from '../../types';

import './collection-preview.styles.scss';

interface CollectionPreviewProps {
  title: string;
  items: ItemType[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items.filter((item: ItemType, index:any) => index < 4).map((item) => (<CollectionItem key={item.id} item={item}/>))}
      </div>
    </div>
  )
}

export default CollectionPreview;
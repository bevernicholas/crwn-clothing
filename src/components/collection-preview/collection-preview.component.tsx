import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss';

interface CollectionPreviewProps {
  title: string;
  items: any[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items.filter((item:any, index:any) => index < 4).map(({id, ...itemProps}) => (<CollectionItem key={id} {...itemProps}/>))}
      </div>
    </div>
  )
}

export default CollectionPreview;
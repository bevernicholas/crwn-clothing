import React from 'react';
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
        {items.filter((item:any, index:any) => index < 4).map((item: any) => (<div key={item.id}>{item.name}</div>))}
      </div>
    </div>
  )
}

export default CollectionPreview;
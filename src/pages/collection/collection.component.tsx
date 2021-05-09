import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { ItemType } from '../../types';

import './collection.styles.scss';

interface CollectionPageProps {
  collection: any;
}

const CollectionPage: React.FC<CollectionPageProps & RouteComponentProps> = ({ collection }) => {
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

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);


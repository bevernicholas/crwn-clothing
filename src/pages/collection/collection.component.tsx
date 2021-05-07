import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage: React.FC<RouteComponentProps> = ({ match }) => (
  <div className="collection-page">
    <h2>COLLECTION PAGE</h2>
  </div>
);

export default CollectionPage;


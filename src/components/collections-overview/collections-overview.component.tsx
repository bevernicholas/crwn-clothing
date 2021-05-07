import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

interface CollectionsOverviewProps {
  collections: any
}

const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...collectionProps }: any) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview)
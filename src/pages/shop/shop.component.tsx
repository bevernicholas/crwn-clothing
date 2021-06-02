import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

interface ShopPageProps {
  updateCollections: any;
}

class ShopPage extends React.Component<ShopPageProps & RouteComponentProps, any> {
  constructor(props: ShopPageProps & RouteComponentProps) {
    super(props);

    this.state = {};
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
    })
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
      <Route exact path={`${match.path}`}  component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    )
  }
};

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections: (collectionsMap: any) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
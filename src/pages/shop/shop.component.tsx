import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

interface ShopPageProps {
  updateCollections: any;
}

interface ShopPageState {
  isLoading: boolean;
}

class ShopPage extends React.Component<ShopPageProps & RouteComponentProps, ShopPageState> {
  constructor(props: ShopPageProps & RouteComponentProps) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ isLoading: false });
    })
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
      <Route exact path={`${match.path}`}  render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
    </div>
    )
  }
};

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections: (collectionsMap: any) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
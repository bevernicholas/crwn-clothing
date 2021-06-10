import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

interface ShopPageProps {
  fetchCollectionsStartAsync: any;
  isFetching: boolean;
  isCollectionsLoaded: boolean;
}

interface ShopPageState {}

class ShopPage extends React.Component<ShopPageProps & RouteComponentProps, ShopPageState> {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching, isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
      <Route exact path={`${match.path}`}  render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
    </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
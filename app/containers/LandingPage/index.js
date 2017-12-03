/**
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import isEmpty from 'lodash/isEmpty';
import isArray from 'lodash/isArray';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectLoadingRecomendations,
  makeSelectLoadRecomendationsComplete,
  makeSelectRecomendationsError,
  makeSelectRecomendationsData,
  makeSelectLoadingNewsHeadLines,
  makeSelectLoadNewsHeadLinesComplete,
  makeSelectNewsHeadLinesError,
  makeSelectNewsHeadLinesData
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import BannerComponent from '../../components/LandingPageComponents/Banner/Loadable';
import ServicesComponent from '../../components/LandingPageComponents/ServicesComponent/Loadable';
import RecomendationComponent from '../../components/LandingPageComponents/RecomendationComponent/Loadable';
import MedicalNewsComponent from '../../components/LandingPageComponents/MedicalNewsComponent/Loadable';
import ContactUsComponent from '../../components/LandingPageComponents/ContactUsComponent/Loadable';

import {
  loadRecomendations,
  loadNewsHeadLines
} from './actions';

import CookingLoader from'../../components/LoadingComponents/CookingLoader';

import '../../styles/LandingPage/agency.min.css';

export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.dispatch(loadRecomendations());
    this.props.dispatch(loadNewsHeadLines());
  }

  render() {
    return (
      <div id='page-top'>
        <Helmet>
          <title>Your Health</title>
          <meta name="description" content="Description of LandingPage" />
        </Helmet>
        <BannerComponent/>
        <ServicesComponent/>
        {
          !this.props.loadRecomendations && this.props.loadRecomendationsComplete && !isEmpty(JSON.parse(this.props.loadRecomendationsData)) && 
          <RecomendationComponent
            recomendations={JSON.parse(this.props.loadRecomendationsData)}
          />
        }
        {
          this.props.loadRecomendations && 
          <CookingLoader/>
        }
        {
          !this.props.loadNews && this.props.loadNewsComplete && !isEmpty((JSON.parse(this.props.newsData)).articles) && 
          <MedicalNewsComponent
            newsArray={((JSON.parse(this.props.newsData)).articles)}
          />
        }
        {
          this.props.loadNews && 
          <CookingLoader/>
        }
        <ContactUsComponent/>

      </div>

    );
  }
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loadRecomendations: makeSelectLoadingRecomendations(),
  loadRecomendationsComplete: makeSelectLoadRecomendationsComplete(),
  loadRecomendationsError: makeSelectRecomendationsError(),
  loadRecomendationsData: makeSelectRecomendationsData(),
  loadNews: makeSelectLoadingNewsHeadLines(),
  loadNewsComplete: makeSelectLoadNewsHeadLinesComplete(),
  loadNewsError: makeSelectNewsHeadLinesError(),
  newsData: makeSelectNewsHeadLinesData()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'landingPage', reducer });
const withSaga = injectSaga({ key: 'landingPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LandingPage);

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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import BannerComponent from '../../components/LandingPageComponents/Banner/Loadable';
import ServicesComponent from '../../components/LandingPageComponents/ServicesComponent/Loadable';

import '../../styles/LandingPage/agency.min.css';

export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div id='page-top'>
        <Helmet>
          <title>Your Health</title>
          <meta name="description" content="Description of LandingPage" />
        </Helmet>
        <script src="agency.min.js"></script>
        <BannerComponent/>
        <ServicesComponent/>

      </div>

    );
  }
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  landingpage: makeSelectLandingPage(),
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

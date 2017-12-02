import { createSelector } from 'reselect';

/**
 * Direct selector to the landingPage state domain
 */
const selectLandingPageDomain = (state) => state.get('landingPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LandingPage
 */

const makeSelectLandingPage = () => createSelector(
  selectLandingPageDomain,
  (substate) => substate.toJS()
);

const makeSelectLoadingRecomendations = () => createSelector(
  selectLandingPageDomain,
  (substate) => substate.get('loaading_recomendations')
);

const makeSelectLoadRecomendationsComplete = () => createSelector(
  selectLandingPageDomain,
  (substate) => substate.get('load_recomendations_complete')
);

const makeSelectRecomendationsError = () => createSelector(
  selectLandingPageDomain,
  (substate) => substate.get('load_recomendations_error')
);

const makeSelectRecomendationsData = () => createSelector(
  selectLandingPageDomain,
  (substate) => substate.get('load_recomendations_data')
);

export default makeSelectLandingPage;
export {
  selectLandingPageDomain,
  makeSelectLoadingRecomendations,
  makeSelectLoadRecomendationsComplete,
  makeSelectRecomendationsError,
  makeSelectRecomendationsData
};

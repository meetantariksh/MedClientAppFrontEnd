import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  LOAD_RECOMENDATIONS
} from './constants';
import{
  loadRecomendationsComplete,
  loadRecomendationsError
} from './actions';
import{
  requestGetAPIData
} from '../../utils/requestAPIData';

export function* loadRecomendations(){
  const apiUrl = 'http://localhost:8080/getRecommendations';
  try {
    let recomendations = yield call(requestGetAPIData, apiUrl);
    yield put(loadRecomendationsComplete(recomendations));
  } catch (err) {
    console.log(err);
    yield put(loadRecomendationsError());
  }
}

// Individual exports for testing
export default function* landingPageDefaultSaga() {
  yield takeLatest(LOAD_RECOMENDATIONS, loadRecomendations);
}

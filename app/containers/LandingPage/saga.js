import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  LOAD_RECOMENDATIONS,
  LOAD_NEWS_HEADLINES
} from './constants';
import{
  loadRecomendationsComplete,
  loadRecomendationsError,
  loadNewsHeadLinesComplete,
  loadNewsHeadLinesError
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

export function* loadNewsHeadLines(){
  const apiUrl = 'http://localhost:8080/getNewsHeadlines';
  try {
    let newsHeadLines = yield call(requestGetAPIData, apiUrl);
    yield put(loadNewsHeadLinesComplete(newsHeadLines));
  } catch (err) {
    console.log(err);
    yield put(loadNewsHeadLinesError());
  }
}

// Individual exports for testing
export default function* landingPageDefaultSaga() {
  yield takeLatest(LOAD_RECOMENDATIONS, loadRecomendations);
  yield takeLatest(LOAD_NEWS_HEADLINES, loadNewsHeadLines);
}

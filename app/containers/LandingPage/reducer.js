/*
 *
 * LandingPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_RECOMENDATIONS,
  LOAD_RECOMENDATIONS_COMPLETE,
  LOAD_RECOMENDATIONS_ERROR,
  LOAD_NEWS_HEADLINES,
  LOAD_NEWS_HEADLINES_COMPLETE,
  LOAD_NEWS_HEADLINES_ERROR
} from './constants';

const initialState = fromJS({
  loaading_recomendations: false,
  load_recomendations_complete: false,
  load_recomendations_error: false,
  load_recomendations_data: '',
  loaading_news_headlines: false,
  load_news_headlines_complete: false,
  load_news_headlines_error: false,
  load_news_headlines_data: ''
});

function landingPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECOMENDATIONS:
      return state
        .set('loaading_recomendations', true)
        .set('load_recomendations_complete', false)
        .set('load_recomendations_error', false);
    case LOAD_RECOMENDATIONS_COMPLETE:
      return state
        .set('loaading_recomendations', false)
        .set('load_recomendations_complete', true)
        .set('load_recomendations_error', false)
        .set('load_recomendations_data', action.recomendations);
    case LOAD_RECOMENDATIONS_ERROR:
      return state
        .set('loaading_recomendations', false)
        .set('load_recomendations_complete', false)
        .set('load_recomendations_error', true);
    case LOAD_NEWS_HEADLINES:
      return state
        .set('loaading_news_headlines', true)
        .set('load_news_headlines_complete', false)
        .set('load_news_headlines_error', false);
    case LOAD_NEWS_HEADLINES_COMPLETE:
      return state
        .set('loaading_news_headlines', false)
        .set('load_news_headlines_complete', true)
        .set('load_news_headlines_error', false)
        .set('load_news_headlines_data', action.newsHeadLines);
    case LOAD_NEWS_HEADLINES_ERROR:
      return state
        .set('loaading_news_headlines', false)
        .set('load_news_headlines_complete', false)
        .set('load_news_headlines_error', true);
    default:
      return state;
  }
}

export default landingPageReducer;

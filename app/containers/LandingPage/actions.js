/*
 *
 * LandingPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_RECOMENDATIONS,
  LOAD_RECOMENDATIONS_COMPLETE,
  LOAD_RECOMENDATIONS_ERROR,
  LOAD_NEWS_HEADLINES,
  LOAD_NEWS_HEADLINES_COMPLETE,
  LOAD_NEWS_HEADLINES_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadRecomendations() {
  return {
    type: LOAD_RECOMENDATIONS,
  };
}

export function loadRecomendationsComplete(recomendations) {
  return {
    type: LOAD_RECOMENDATIONS_COMPLETE,
    recomendations
  };
}

export function loadRecomendationsError() {
  return {
    type: LOAD_RECOMENDATIONS_ERROR,
  };
}

export function loadNewsHeadLines() {
  return {
    type: LOAD_NEWS_HEADLINES,
  };
}

export function loadNewsHeadLinesComplete(newsHeadLines) {
  return {
    type: LOAD_NEWS_HEADLINES_COMPLETE,
    newsHeadLines
  };
}

export function loadNewsHeadLinesError() {
  return {
    type: LOAD_NEWS_HEADLINES_ERROR,
  };
}

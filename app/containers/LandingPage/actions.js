/*
 *
 * LandingPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_RECOMENDATIONS,
  LOAD_RECOMENDATIONS_COMPLETE,
  LOAD_RECOMENDATIONS_ERROR
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

export function loadRecomendationsComplete() {
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

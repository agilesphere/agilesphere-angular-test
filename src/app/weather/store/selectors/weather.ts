import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromWeather from '../reducers/weather';

export const getWeatherState = createFeatureSelector<any>(
  'weather'
);

// city state

export const getCityState = createSelector(
  getWeatherState,
  (state: any) => state.city
);

export const getIsLoading = createSelector(
  getCityState,
  fromWeather.getIsLoading
);

export const getIsCityFound = createSelector(
  getCityState,
  fromWeather.getIsCityFound
);

export const getHasError = createSelector(
  getCityState,
  fromWeather.getHasError
);

export const getWeather = createSelector(
    getCityState,
    fromWeather.getWeather
  );
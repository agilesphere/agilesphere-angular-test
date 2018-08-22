import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../store/state';

export interface CityState {
  city: AppState;
}

export const getWeatherState = createFeatureSelector<CityState>('weather');

export const getCityState = createSelector(
  getWeatherState,
  (state: CityState) => state.city
);

export const getIsLoading = createSelector(
  getCityState,
  (state: AppState) => state.isLoading
);

export const getHasError = createSelector(
  getCityState,
  (state: AppState) => state.hasError
);

export const getWeather = createSelector(
  getCityState,
  (state: AppState) => state.weather
);

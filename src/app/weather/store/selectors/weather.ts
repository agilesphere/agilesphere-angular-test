import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from '../reducers/weather';

export const selectWeatherState = createFeatureSelector<WeatherState>('weather');

export const selectWeatherList = createSelector(selectWeatherState, state => {  
    if (state.weathers.length) {
      return state.weathers;     
    }    
});

export const selectFailureMessage = createSelector(selectWeatherState, state => {  
  return state.failureMessage;   
});
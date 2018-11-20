import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Weather} from '../../../model/weather';


export interface Response {
  data: Weather;
}
export interface CitySelector {
  city: Response;
}

export const fromFeature = createFeatureSelector<CitySelector>('weather');
export const getWeather = createSelector(fromFeature, (state: CitySelector) => state.city);

import { Action } from '@ngrx/store';
import { Weather } from '../../../model/weather';

export enum WeatherActionTypes {
  SearchWeather = '[Weather Result] Search Weather',
  LoadWeather = '[Weather Result] Load Weather',
  LoadWeatherFail = '[Weather Result] Load Weather Fail',
}

export class SearchWeather implements Action {
  readonly type = WeatherActionTypes.SearchWeather;
  constructor(public payload: {city : string}) {}
}

export class LoadWeather implements Action {
  readonly type = WeatherActionTypes.LoadWeather;
  constructor(public payload: Weather) {}
}

export class LoadWeatherFail implements Action {
  readonly type = WeatherActionTypes.LoadWeatherFail;
  constructor(public payload: string) {}
}

export type WeatherActions =
  | SearchWeather
  | LoadWeather
  | LoadWeatherFail

import { Action } from '@ngrx/store';
import {Weather} from '../../../model/weather';

export const LOAD_WEATHER = '[LOAD WEATHER] On form begin';
export const LOAD_WEATHER_SUCCESS = '[LOAD WEATHER SUCCESS] On weather success';

export class LoadWeather implements Action {
  readonly type = LOAD_WEATHER;
  constructor(public payload: string) {

  }
}

export class LoadWeatherSuccess implements Action {
  readonly type = LOAD_WEATHER_SUCCESS;
  constructor(public payload: Weather) {
  }
}

export type actions = LoadWeather | LoadWeatherSuccess;



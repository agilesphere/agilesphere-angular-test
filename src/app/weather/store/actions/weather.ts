import { Action } from '@ngrx/store';
import { Weather } from '../../../model/weather';

export const LOAD_CITY_WEATHER = 'LOAD_CITY_WEATHER';
export const LOAD_CITY_WEATHER_SUCCESS = 'LOAD_CITY_WEATHER_SUCCESS';
export const LOAD_CITY_WEATHER_FAIL = 'LOAD_CITY_WEATHER_FAIL';

export class LoadCityWeather implements Action {
    readonly type = LOAD_CITY_WEATHER;
    constructor(public payload: string) {}
}

export class LoadCityWeatherSuccess implements Action {
    readonly type = LOAD_CITY_WEATHER_SUCCESS;
    constructor(public payload: Weather) {}
}

export class LoadCityWeatherFail implements Action {
    readonly type = LOAD_CITY_WEATHER_FAIL;
    constructor(public payload: any) {}
}

export type WheatherActions = LoadCityWeather | LoadCityWeatherSuccess | LoadCityWeatherFail;


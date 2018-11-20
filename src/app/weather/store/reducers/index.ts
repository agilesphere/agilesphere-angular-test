import { ActionReducerMap } from '@ngrx/store';

import * as fromWeather from './weather';

export const reducers: ActionReducerMap<any>  = {
  city: fromWeather.weatherReducer
};

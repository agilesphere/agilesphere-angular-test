import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import { WeatherService } from '../../weather.service';
import * as weatherActions from '../actions/weather';

@Injectable()
export default class WeatherEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) { }

  @Effect()
  loadCity$ = this.actions$
    .ofType(weatherActions.LOAD_CITY_WEATHER)
    .pipe(
      switchMap((action: any) => {
        return this.weatherService.searchWeatherForCity(action.payload)
          .pipe(
            map(city => new weatherActions.LoadCityWeatherSuccess(city)),
            catchError(error => of(new weatherActions.LoadCityWeatherFail(error)))
          );
      })
    );
}

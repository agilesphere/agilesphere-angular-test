import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {switchMap, map, catchError, tap} from 'rxjs/operators';

import {WeatherService} from '../../weather.service';
import * as weatherActions from '../actions/weather';
import {of} from 'rxjs/observable/of';

@Injectable()
export default class SearchEffect {

  constructor(private actions$: Actions, private weatherService: WeatherService) {
  }

  @Effect()
  getCity$ = this.actions$
    .ofType(weatherActions.LOAD_WEATHER)
    .pipe(
      switchMap((action: any) => {
        return this.weatherService.searchWeatherForCity(action.payload).pipe(
          map(resp => new weatherActions.LoadWeatherSuccess(resp)),
          catchError(error => of(/*error*/))
        );
      })
    );
}

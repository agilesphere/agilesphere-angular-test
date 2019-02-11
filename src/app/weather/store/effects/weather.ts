import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WeatherActionTypes, SearchWeather, LoadWeather, LoadWeatherFail } from '../actions/weather';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../../model/weather';
import { Observable } from 'rxjs';

@Injectable()
export class effects {

  @Effect()
  loadWeather$ = this.actions$.pipe(
    ofType<SearchWeather>(WeatherActionTypes.SearchWeather),
    mergeMap(({payload}) =>                 
        this.weatherService.searchWeatherForCity(payload.city)
        .pipe(
          map((weather: Weather) => new LoadWeather(weather)),
          catchError(err => Observable.of(new LoadWeatherFail(err.error.message)))
        )
      )       
    );    

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
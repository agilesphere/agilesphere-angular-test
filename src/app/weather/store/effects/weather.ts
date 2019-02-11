import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { WeatherActionTypes, SearchWeather, LoadWeather } from '../actions/weather';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../../model/weather';

@Injectable()
export class effects {

  @Effect()
  loadWeather$ = this.actions$.pipe(
    ofType<SearchWeather>(WeatherActionTypes.SearchWeather),
    mergeMap(({payload}) =>                 
        this.weatherService.searchWeatherForCity(payload.city)         
    ),
    map((weather: Weather) => new LoadWeather(weather))
  );

  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
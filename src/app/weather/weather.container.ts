import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

import { Summary } from '../model/weather';
import { AppState } from './store/state';
import * as weatherActions from './store/actions/weather';
import * as selectors from './store/selectors/';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.container.html'
})
export class WeatherContainerComponent implements OnInit {
  cities$: Observable<Summary[]>;
  isLoading$: Observable<boolean>;
  hasError$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.cities$ = this.store.select(selectors.getWeather);
    this.isLoading$ = this.store.select(selectors.getIsLoading);
    this.hasError$ = this.store.select(selectors.getHasError);
  }

  citySearch(city: string) {
    this.store.dispatch(new weatherActions.LoadCityWeather(city.toLowerCase()));
  }
}

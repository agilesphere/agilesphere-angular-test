import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

import { Summary } from '../model/weather';
import { AppState } from './store/state';
import * as weatherActions from './store/actions/weather';
import * as selectors from './store/selectors/';

@Component({
  selector: 'app-weather',
  template: `
  <app-search (search)="citySearch($event)"></app-search>
  <app-results [cities]="(cities$ | async)"></app-results>  `
})
export class WeatherContainerComponent implements OnInit {
  cities$: Observable<Summary[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.cities$ = this.store.select(selectors.getWeather);
  }

  citySearch(city: string) {
    this.store.dispatch(new weatherActions.LoadCityWeather(city.toLowerCase()));
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

import * as fromStore from './store';

@Component({
  selector: 'app-weather',
  template: `
  <app-search (search)="citySearch($event)"></app-search>
  <app-results [cities]="(cities$ | async)"></app-results>  `
})
export class WeatherContainer {
  cities$: Observable<any[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.cities$ = this.store.select(fromStore.getWeather);
  }

  citySearch(city: string) {
    this.store.dispatch(new fromStore.LoadCityWeather(city.toLowerCase()));
  }
}

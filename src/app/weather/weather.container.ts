import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as actions from './store/actions/weather';
import * as selectors from './store/selectors/';
import {Store} from '@ngrx/store';
import {Weather} from '../model/weather';


export interface Response {
  data: Weather;
}
@Component({
  selector: 'app-weather',
  template: `
  <app-search (onSearch)="citySearch($event)"></app-search>
  <app-results [results]="(searchResults$ | async)?.data"></app-results>`
})
export class WeatherContainer implements OnInit {

  public searchResults$: Observable<Response>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.searchResults$ = this.store.select(selectors.getWeather);

  }

  citySearch(search: string) {
    this.store.dispatch(new actions.LoadWeather(search.toLowerCase()));
  }
}

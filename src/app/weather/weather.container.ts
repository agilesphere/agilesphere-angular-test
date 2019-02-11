import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Weather } from '../model/weather';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-state';
import { selectWeatherList, selectFailureMessage } from './store/selectors/weather';
import { SearchWeather } from './store';

@Component({
  selector: 'app-weather',
  template: `
  <app-search (citySearch)="citySearch($event)"></app-search>
  <div class="load-error" *ngIf="(failureMessage$ | async) as errorMsg">{{ errorMsg }}</div>
  <app-results [weathers]="weathers$ | async"></app-results>
  `
})
export class WeatherContainer implements OnInit {
  
  weathers$: Observable<Weather[]>
  failureMessage$ : Observable<string>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    
    // not using store.pipe() to make mocking of ngrx store quick and simple
    this.weathers$ = this.store.select(selectWeatherList) 
    this.failureMessage$ = this.store.select(selectFailureMessage)
  }

  citySearch(city) {
    this.store.dispatch(new SearchWeather({city}));
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Weather } from '../model/weather';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-state';
import { selectWeatherList } from './store/selectors/weather';
import { SearchWeather } from './store';

@Component({
  selector: 'app-weather',
  template: `
  <app-search (citySearch)="citySearch($event)"></app-search>
  <app-results [weathers]="weathers$ | async"></app-results>
  `
})
export class WeatherContainer implements OnInit {
  
  weathers$: Observable<Weather[]>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.weathers$ = this.store.pipe(select(selectWeatherList)) 
  }

  citySearch(city) {
    this.store.dispatch(new SearchWeather({city}));
  }
}

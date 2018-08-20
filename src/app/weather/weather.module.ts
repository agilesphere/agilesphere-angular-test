import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainerComponent } from './weather.container';
import { WeatherService } from './weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { StatusComponent } from './components/status/status.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '../weather/store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('weather', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    StatusComponent,
    WeatherContainerComponent
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }

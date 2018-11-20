import {Component, Input, OnChanges} from '@angular/core';
import {Summary, Weather} from '../../../model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {

  @Input('results') results: Weather;
  summary: Summary;

  constructor() {

  }


  ngOnChanges() {

    if (this.results) {
      this.summary = {
        city: this.results.city.name
      };
    }

  }
}



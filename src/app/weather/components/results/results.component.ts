import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { Weather } from '../../../model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnChanges {
  @Input() weathers : Weather[]
  
  constructor() { }

  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
  }
}



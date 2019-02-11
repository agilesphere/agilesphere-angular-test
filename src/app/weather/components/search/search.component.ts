import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @Output() citySearch = new EventEmitter<string>();
  
  searchControl = new FormControl();

  constructor() { }

  search() {           
    this.citySearch.emit(this.searchControl.value);
    this.searchControl.setValue('');
  }
}

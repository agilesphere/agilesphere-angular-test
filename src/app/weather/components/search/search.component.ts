import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @ViewChild('searchCityInput') searchCityInput: ElementRef;

  @Output() search = new EventEmitter<string>();

  constructor() { }

  onSearch() {
    this.search.emit(this.searchCityInput.nativeElement.value);
    this.searchCityInput.nativeElement.value = '';
  }
}

import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      city: [ '', Validators.required ]
    });
  }

  onSearch() {
    this.search.emit(this.searchForm.value.city);
    this.searchForm.reset();
  }
}

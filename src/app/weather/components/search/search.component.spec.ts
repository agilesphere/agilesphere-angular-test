import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

import Spy = jasmine.Spy;

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a value on search method call ', function() {
    const searchEmitSpy: Spy = spyOn(component.search, 'emit').and.callFake(() => {});
    component.onSearch();
    fixture.detectChanges();
    expect(searchEmitSpy).toHaveBeenCalled();
  });

  it('should reset the form on search method call', function() {
    const resetFormSpy: Spy = spyOn(component.searchForm, 'reset').and.callFake(() => {});
    component.onSearch();
    fixture.detectChanges();
    expect(resetFormSpy).toHaveBeenCalled();
  });

});

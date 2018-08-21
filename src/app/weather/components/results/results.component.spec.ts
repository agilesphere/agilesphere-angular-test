import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ResultsComponent } from './results.component';
import { Summary } from '../../../model/weather';
import Spy = jasmine.Spy;


describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let expectedCities: Summary[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      imports: [
        BrowserAnimationsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispaly a table where the first column is "City" ', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.getElementsByTagName('th')[0].textContent).toEqual('City');
  });

  it('should dispaly a table where the first column is "6 AM" ', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.getElementsByTagName('th')[1].textContent).toEqual('6 AM');
  });

  it('should dispaly a table where the first column is "12 PM" ', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.getElementsByTagName('th')[2].textContent).toEqual('12 PM');
  });

  it('should dispaly a table where the first column is "6 PM" ', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.getElementsByTagName('th')[3].textContent).toEqual('6 PM');
  });

  it('should dispaly a table where the first column is "12 AM" ', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.getElementsByTagName('th')[4].textContent).toEqual('12 AM');
  });
});

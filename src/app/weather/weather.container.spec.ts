import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from './weather.container';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SearchWeather } from './store';

export const mockWeather = [
  { city: 'london', temp: 14.5 }, 
  { city: 'slough', temp: 18.5 }
];

describe('WeatherContainer', () => {  
  class StoreMock { 
    select =  jasmine.createSpy().and.returnValue(Observable.of(mockWeather)); 
    dispatch = jasmine.createSpy();
  }  

  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContainer ],
      imports: [],
      providers: [
        {
          provide: Store,
          useClass: StoreMock,
        }
      ],      
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should select weather list from store', () => {
    component.weathers$.subscribe(data => {
      expect(data).toBe(this.mockWeather);    
    })
  });

  it('should dispatch SearchWeather action with a city name', () => {
    const city = 'london'
    component.citySearch(city)

    const action = new SearchWeather({city})

    let store = TestBed.get(Store);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

});

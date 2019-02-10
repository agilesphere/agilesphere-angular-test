import { HttpRequest } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
// import { CMS_ENV_MOCK } from '@game/cms/test';
// import { CMS_ENV } from '../tokens/cms-environment.token';


describe('SchemaService', () => {
  let backend: HttpTestingController;
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });

    backend = TestBed.get(HttpTestingController);
    service = TestBed.get(WeatherService);
  });

  afterEach(() => {
    backend.verify();
  });

  
  it('should call weather api and pass city name and get some valid response', () => {
    const city = 'london'
    const fakeResponse: any = { city: city, temp: 16.5 };

    service.searchWeatherForCity(city).subscribe(result => {
      expect(result).toEqual(fakeResponse);
    });

    const req = backend.expectOne((http: HttpRequest<any>) => {
      return (
        http.urlWithParams.startsWith(
          'https://api.openweathermap.org/data/2.5/forecast/data/2.5/forecast?q=&cnt=8&unit=matric'
        ) &&
        http.method === 'GET' &&
        http.params.get('q') === city &&
        http.params.get('cnt') === '8' &&
        http.params.get('units') === 'metric'
      );
    });

    req.flush(fakeResponse);
  });
  

});

import { defer } from 'rxjs/observable/defer';

import { WeatherService } from './weather.service';
import{ mockedWeatherData } from '../utility/mockAPI';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WeatherService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return weather data on success and httpClient should be called once', () => {
    httpClientSpy.get.and.returnValue(asyncData(mockedWeatherData));

    service.searchWeatherForCity('Rome')
      .subscribe(cityWeather => {
        expect(cityWeather).toEqual(mockedWeatherData);
      });

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});

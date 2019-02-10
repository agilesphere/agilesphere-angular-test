import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Weather } from '../model/weather';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  searchWeatherForCity(city: string) :  Observable<Weather> {
    
    let params = new HttpParams();
    params = params.append('q', city);
    params = params.append('cnt', '8');
    params = params.append('units', 'metric');
    params = params.append('APPID', environment.apiKey);

    return this.http.get<any>(environment.apiUrl, { params });
  }

}

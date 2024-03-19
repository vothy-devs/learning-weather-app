import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IForecastResponse } from './forecast.response.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor(private http: HttpClient) { }

  getForecast(zipcode:string): Observable<any> {
    return this.http.get<IForecastResponse>(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=`)
  }

}

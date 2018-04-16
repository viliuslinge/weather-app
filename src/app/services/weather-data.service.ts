import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherDataService {
  dataUrl;

  constructor(private http: Http) { }

  getDataApi(city, apiKey) {
    this.dataUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=' + apiKey;
    return this.http.get(this.dataUrl)
      .map(res => res.json());
  }
}

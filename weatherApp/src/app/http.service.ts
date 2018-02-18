import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
   }

   getWeatherData(id){
     return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=' + id + '&units=imperial&APPID=3a06c1d4a65de6ffe64a5820d79996c4')
   }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas-component',
  templateUrl: './dallas-component.component.html',
  styleUrls: ['./dallas-component.component.css']
})
export class DallasComponentComponent implements OnInit {
  weatherData: object = {};

  constructor(private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      console.log(params.get('id'));
      this._httpService.getWeatherData(params.get('id'))
      .subscribe((data: any) =>{
        this.weatherData = data;
      })
    })
  }

}

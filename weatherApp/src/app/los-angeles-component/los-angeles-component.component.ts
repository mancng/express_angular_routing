import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-los-angeles-component',
  templateUrl: './los-angeles-component.component.html',
  styleUrls: ['./los-angeles-component.component.css']
})
export class LosAngelesComponentComponent implements OnInit {
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

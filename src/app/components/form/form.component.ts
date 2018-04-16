import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../services/weather-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  city: String;
  apiKey: String;
  data: any[] = [];

  constructor(public weathetDataService: WeatherDataService) { }

  ngOnInit() {
    if (localStorage.data) {
      const lsData = localStorage.getItem('data');
      this.data = JSON.parse(lsData);
    }
  }
  updateForm(city) {
    this.city = city.value;
    city.value = '';
  }

  showData() {
    this.weathetDataService.getDataApi(this.city, this.apiKey).subscribe(dataItem => {
      this.data.push(dataItem);
      localStorage.setItem('data', JSON.stringify(this.data));
    });
  }
}



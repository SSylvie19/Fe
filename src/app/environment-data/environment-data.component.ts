import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-environment-data',
  templateUrl: './environment-data.component.html',
  styleUrls: ['./environment-data.component.scss'],
})
export class EnvironmentDataComponent implements OnInit {
  weatherData: any[];
  displayedColumns: string[] = [
    'rainDrop',
    'waterLevel',
    'temperature',
    'airHumidity',
    'soilMoisture',
    'lightIntensity',
    'time',
  ];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getWeatherData().subscribe((data) => {
      this.weatherData = data;
    });
  }
}

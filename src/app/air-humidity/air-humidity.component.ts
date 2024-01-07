import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexLegend,
  ApexMarkers,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  markers: ApexMarkers;
};
@Component({
  selector: 'app-air-humidity',
  templateUrl: './air-humidity.component.html',
  styleUrls: ['./air-humidity.component.scss'],
})
export class AirHumidityComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public listData: any[];
  constructor(private dataService: DataService) {
    this.chartOptions = {
      series: [
        {
          name: 'Air Humidity',
          data: [],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      markers: {
        size: 1,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Air Humidity',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [0],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    };
  }
  ngOnInit(): void {
    this.dataService.getWeatherData().subscribe((data) => {
      this.listData = data;
      for (let i = 0; i < this.listData.length; i++) {
        this.chartOptions.series[0].data.push(this.listData[i].airHumidity);
        this.chartOptions.xaxis.categories.push(this.listData[i].time);
      }
      this.chartOptions.xaxis.categories.shift();
    });
  }
}

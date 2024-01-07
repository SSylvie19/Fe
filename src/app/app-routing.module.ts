import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { EnvironmentDataComponent } from './environment-data/environment-data.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SoilMoistureComponent } from './soil-moisture/soil-moisture.component';
import { RainDropComponent } from './rain-drop/rain-drop.component';
import { AirHumidityComponent } from './air-humidity/air-humidity.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'dashboard', component: LineChartComponent },
  { path: 'data', component: EnvironmentDataComponent },
  { path: 'temp', component: TemperatureComponent },
  { path: 'soil', component: SoilMoistureComponent },
  { path: 'rain', component: RainDropComponent },
  { path: 'air', component: AirHumidityComponent },
  { path: "status", component: StatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

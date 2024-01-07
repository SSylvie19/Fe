import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { EnvironmentDataComponent } from './environment-data/environment-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { TemperatureComponent } from './temperature/temperature.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { SoilMoistureComponent } from './soil-moisture/soil-moisture.component';
import { RainDropComponent } from './rain-drop/rain-drop.component';
import { AirHumidityComponent } from './air-humidity/air-humidity.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MaterialModule } from './material-module';
import { StatusComponent } from './status/status.component';
import { DataService } from './services/data.service';
import { DeviceService } from './services/device.service';
@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    EnvironmentDataComponent,
    TemperatureComponent,
    SoilMoistureComponent,
    RainDropComponent,
    AirHumidityComponent,
    MenubarComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    NgApexchartsModule,
    NgChartsModule,
    MaterialModule,
  ],
  providers: [DataService, DeviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

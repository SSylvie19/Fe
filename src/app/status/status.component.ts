import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  public deviceData: any;
  public status: string = '';
  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.loadData();
    console.log(this.deviceData);
  }
  loadData(): void {
    this.deviceService.getDeviceInfo().subscribe((data) => {
      this.deviceData = data;
      this.status = this.deviceData.status;
    });
  }
  sendDataToApi(): void {
    this.deviceService.getDeviceInfo().subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
        // You can handle the response here if needed
      },
      (error) => {
        console.error('Error sending data:', error);
        // Handle errors here
      }
    );
  }
}

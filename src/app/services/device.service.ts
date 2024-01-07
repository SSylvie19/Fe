import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  url: string = environment.apiBaseUrl + '/Weather/GetDeviceInfo';
  postDataUrl: string = environment.apiBaseUrl + '/Weather/SendData';
  list: Device[] = [];

  constructor(private http: HttpClient) {}

  getDeviceInfo(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  sendData(data: any): Observable<any> {
    return this.http.post<any>(this.postDataUrl, data);
  }
}

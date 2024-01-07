import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  url: string = environment.apiBaseUrl + '/Weather/GetWeatherData';
  list: Data[] = [];

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}

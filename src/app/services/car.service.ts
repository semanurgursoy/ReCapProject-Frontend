import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/car/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl ='https://localhost:44317/api/cars/getcarsdetail';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
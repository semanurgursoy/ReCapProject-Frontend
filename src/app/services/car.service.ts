import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listReponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl ='https://localhost:44317/api';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+'/cars/getalldetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByCarId(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"/cars/getcardetails?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+'/cars/getcarsdetailsbybrandid?id='+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"/cars/getcarsdetailsbycolorid?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }


}

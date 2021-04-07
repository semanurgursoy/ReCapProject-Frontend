import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:Car[];
  dataLoaded=false; 
  imageBasePath="https://localhost:44317/"


  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"])
        this.getCarDetails(params["id"])
    })
  }

  getCarDetails(id:number){
    this.carService.getCarDetailsByCarId(id).subscribe(response =>{
      this.carDetails=response.data;
      console.log(this.carDetails);
      this.dataLoaded = true;
    })
  }

}

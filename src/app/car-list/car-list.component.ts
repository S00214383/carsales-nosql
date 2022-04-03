import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../car-api.service';
import {ICar, Car} from '../interfaces/car';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [CarApiService]
})
export class CarListComponent implements OnInit {
carsData!: ICar[];
  constructor(private _carAPIService:CarApiService) { }

  ngOnInit() {
    this._carAPIService.getCarData().subscribe(carsData => 
      {this.carsData = carsData  });

  }

  addTheCar(make: string, model:string, year:string, imageUrl:string):boolean{
    let tempCar:ICar;
    tempCar=new Car (make,model,year,imageUrl);
    console.log(tempCar); 
    this._carAPIService.addCarData(tempCar);
    return false;

  }

}

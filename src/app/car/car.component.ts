import { Component, Input, OnInit } from '@angular/core';
import { CarApiService } from '../car-api.service';
import { ICar } from '../interfaces/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  carData!: any;
  carImageWidth:number=300;

  constructor(private _carAPIService:CarApiService) { }

  ngOnInit() {
    console.log(this.carData); 
  }

  deleteCar(){
    this._carAPIService.deleteCar(this.carData.id);
    return false; 
  }
}

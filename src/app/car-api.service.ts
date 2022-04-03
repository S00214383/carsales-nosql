import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/compat/firestore';


import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { ICar } from "../app/interfaces/car";
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable()

export class CarApiService {
   carsDataCollection:AngularFirestoreCollection<ICar> ;

   carsData:Observable<ICar[]> | undefined ;

   allCarsData:ICar[] | undefined;

   errorMessage: string | undefined ;

   constructor(private _http:HttpClient, private _afs:AngularFirestore){
   //connect to database
   this.carsDataCollection=_afs.collection<ICar>("cars_data");
}

getCarData():Observable<ICar[]>{
  this.carsData = this.carsDataCollection.valueChanges({idField:'id'});
  this.carsData.subscribe(
    data => console.log("getCarsData:"+JSON.stringify(data))
  )
  return this.carsData;
}

addCarData(car:ICar):void {
  this.carsDataCollection.add(JSON.parse(JSON.stringify(car)));
}

private handleError (err:HttpErrorResponse){
  console.log('CarApiService: ' +err.message);
  return ("message");
 

}

deleteCar(carId:string):void{
  this.carsDataCollection.doc(carId).delete();

}
  

}



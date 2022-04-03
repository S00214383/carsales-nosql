import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car/car.component';
import { HttpClientModule } from '@angular/common/http';

//import { FirestoreModule } from '@angular/fire/firestore';
//import { firebaseApp$, FirebaseAppModule } from '@angular/fire/app';

import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

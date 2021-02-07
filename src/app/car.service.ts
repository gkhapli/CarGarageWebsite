import { Injectable } from '@angular/core';
import * as appGlobalConstants from '../app-global-constants';
import { Cars } from './models/cars';
import { Vehicle } from './models/vehicle';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

    getCarInformation() {
      return this.http.get(appGlobalConstants.GETCARINFORMATIONAPI+"/cars");
    }

    

}


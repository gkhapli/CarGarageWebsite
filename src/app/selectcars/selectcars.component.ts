import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-selectcars',
  templateUrl: './selectcars.component.html',
  styleUrls: ['./selectcars.component.css']
})
export class SelectcarsComponent implements OnInit {

  vehicles: Vehicle[]; 
  constructor(private carService : CarService) {}

  ngOnInit(): void {

    this.carService.getCarInformation()
    // clone the data object, using its known Config shape
    .subscribe((data: Vehicle[]) => this.vehicles = { ...data });
  }

}

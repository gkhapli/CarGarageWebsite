import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-selectcars',
  templateUrl: './selectcars.component.html',
  styleUrls: ['./selectcars.component.css']
})
export class SelectcarsComponent implements OnInit {

  public vehicleArray: any = [];
  public selectedVehicle: Vehicle;
  constructor(private carService: CarService) { }

  ngOnInit(): void {

    this.carService.getCarInformation()
      .subscribe((result) => {
        this.vehicleArray = result;
      })
  }

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }
}

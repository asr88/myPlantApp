import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';
import { dataPlants } from './dataPlants';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  plants: Array<Plant> = [];
  constructor() { }
  getPlantsList(): Array<Plant> {
    return dataPlants;
  }

  ngOnInit() {
    this.plants = this.getPlantsList();
  }

}

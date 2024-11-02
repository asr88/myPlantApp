import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Plant } from './plant';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlantComponent implements OnInit {

  plants: Array<Plant> = [];

  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.getPlants();
  }

  getPlants() {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
    });
  }

  contarPlantasInteriores() {
    return this.plants.filter(planta => planta.tipo === 'Interior').length; 
  }
  contarPlantasExteriores() {
    return this.plants.filter(planta => planta.tipo === 'Exterior').length; 
  }
}



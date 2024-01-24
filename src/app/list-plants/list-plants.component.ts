import { Component } from '@angular/core';
import { FormPlantsComponent } from '../form-plants/form-plants.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Plant } from '../models/plant.interface';
import { RegisterPlantsComponent } from '../register-plants/register-plants.component';

@Component({
  selector: 'app-list-plants',
  standalone: true,
  imports: [CommonModule, FormsModule, FormPlantsComponent, RegisterPlantsComponent],
  templateUrl: './list-plants.component.html',
  styleUrl: './list-plants.component.css'
})
export class ListPlantsComponent {
  public plantCreated!: Plant;
  public plantFavorite!: Plant;
  public plantDelete!: Plant;
  public plants: Plant[] = [
    {
      name: 'Camelia',
      type: 'Arbusto',
      favorite: false,
    },
    {
      name: 'Cerezo',
      type: 'Árbol',
      favorite: false,
    },
    {
      name: 'Manzano',
      type: 'Árbol',
      favorite: false,
    },
  ];

  public onPlantFavorite(plantFavorite: Plant): void {
    this.plantFavorite = { ...plantFavorite };
    const favorite = this.findPlants(plantFavorite);
    if (favorite !== null) {
      const stylePlant = document.getElementById('register' + favorite);
      if (this.plants[favorite].favorite == true) {
        this.plants[favorite].favorite = false;
        if (stylePlant !== null) {
          stylePlant.classList.remove('bg-orange-400');
        }
      } else {
        this.plants[favorite].favorite = true;
        if (stylePlant !== null) {
          stylePlant.classList.add('bg-orange-400');
        }
      }
    }
  }

  public onPlantDelete(plantDelete: Plant): void {
    this.plantDelete = { ...plantDelete };
    const borrar = this.findPlants(plantDelete);
    if (borrar !== null) {
      this.plants = this.plants.filter(plant => plant.name !== plantDelete.name);
    }
  }

  public onPlantsRegister(plantRegister: Plant): void {
    this.plantCreated = { ...plantRegister };
    const register = this.findPlants(plantRegister);
    if (register == -1) {
      this.plants.push(this.plantCreated);
      this.orderPlants();
    }
  }

  public orderPlants(): void {
    this.plants.sort((a, b) => a.name.localeCompare(b.name));
  }

  public findPlants(plantElected: Plant): number{
    const find = this.plants.findIndex((plant) => plant.name === plantElected.name);
    return find;
  }

}

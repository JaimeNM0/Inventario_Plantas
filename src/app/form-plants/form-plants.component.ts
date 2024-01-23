import { Component, EventEmitter, Output } from '@angular/core';
import { ComponetPlantsComponent } from '../componet-plants/componet-plants.component';
import { CommonModule } from '@angular/common';
import { PlantSelection } from '../models/plant-selection.interface';
import { ButtonPlantsComponent } from '../button-plants/button-plants.component';
import { Plant } from '../models/plant.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-plants',
  standalone: true,
  imports: [ComponetPlantsComponent, CommonModule, ButtonPlantsComponent, FormsModule],
  templateUrl: './form-plants.component.html',
  styleUrl: './form-plants.component.css'
})
export class FormPlantsComponent {
  @Output() plantCreated: EventEmitter<Plant> = new EventEmitter();
  public plant: Plant = {
    name: '',
    type: '',
    favorite: false,
  };
  public plantName: string = '';
  public plantsSelection: PlantSelection[] = [
    {
      name: 'Arbusto',
      imagePath: '../../../assets/img/arbusto.png',
    },
    {
      name: 'Árbol',
      imagePath: '../../../assets/img/arbol.png',
    },
  ];
  public accept: string = '../../../assets/img/icono_aceptar.png';
  public cancel: string = '../../../assets/img/icono_cancelar.png';

  public clickPlantSelection(index: number): void {
    const containerPlant = this.deleteStyleContainerPlant();
    if (containerPlant !== null) {
      const child = containerPlant.children[index].children[0];
      if (child !== null) {
        child.classList.add('containerPlant');
      }
    }

    const plantType = this.plantsSelection[index];
    this.plant.type = plantType.name;
  }

  public clickAcept(): void {
    this.plant.name = this.plantName;
    if(this.plant.name !== '' && this.plant.type !== ''){
      this.plantCreated.emit(this.plant);
    }
  }

  public clickCancel(): void {
    this.plantName = '';
    this.plant.type = '';
    this.deleteStyleContainerPlant();
  }

  public deleteStyleContainerPlant(): HTMLElement | null {
    const containerPlant = document.getElementById('containerPlant');
    if (containerPlant !== null) {
      for (let i = 0; i < containerPlant.children.length; i++) {
        containerPlant.children[i].children[0].classList.remove('containerPlant');
      }
      return containerPlant;
    }
    return containerPlant;
  }

}

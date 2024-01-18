import { Component } from '@angular/core';
import { ComponetPlantsComponent } from '../componet-plants/componet-plants.component';
import { CommonModule } from '@angular/common';
import { PlantSelection } from '../models/plant-selection.interface';
import { ButtonPlantsComponent } from '../button-plants/button-plants.component';

@Component({
  selector: 'app-form-plants',
  standalone: true,
  imports: [ComponetPlantsComponent, CommonModule, ButtonPlantsComponent],
  templateUrl: './form-plants.component.html',
  styleUrl: './form-plants.component.css'
})
export class FormPlantsComponent {
  public aceptar: string = "../../../assets/img/icono_aceptar.png";
  public cancelar: string = "../../../assets/img/icono_cancelar.png";
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

}

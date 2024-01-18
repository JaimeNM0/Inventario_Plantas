import { Component } from '@angular/core';
import { ComponetPlantsComponent } from '../componet-plants/componet-plants.component';
import { CommonModule } from '@angular/common';
import { PlantSelection } from '../models/plant-selection.interface';

@Component({
  selector: 'app-form-plants',
  standalone: true,
  imports: [ComponetPlantsComponent, CommonModule],
  templateUrl: './form-plants.component.html',
  styleUrl: './form-plants.component.css'
})
export class FormPlantsComponent {
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

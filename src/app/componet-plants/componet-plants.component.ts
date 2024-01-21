import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantSelection } from '../models/plant-selection.interface';

@Component({
  selector: 'app-componet-plants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componet-plants.component.html',
  styleUrl: './componet-plants.component.css'
})
export class ComponetPlantsComponent {
  @Input() plant!: PlantSelection;
}

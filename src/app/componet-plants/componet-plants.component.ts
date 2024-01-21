import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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

  @ViewChild('holabutton') holabutton!: ElementRef;

  public clickPlant(): void {
    console.log("Hola " + this.plant.name);
    console.log(this.holabutton);
    //this.holabutton.nativeElement.classList.add('bg-black');
  }
}

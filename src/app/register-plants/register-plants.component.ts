import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Plant } from '../models/plant.interface';
import { ButtonPlantsComponent } from '../button-plants/button-plants.component';

@Component({
  selector: 'app-register-plants',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonPlantsComponent],
  templateUrl: './register-plants.component.html',
  styleUrl: './register-plants.component.css'
})
export class RegisterPlantsComponent {
  @Input() plantRegister!: Plant;
  @Output() plantFavorite: EventEmitter<Plant> = new EventEmitter();
  @Output() plantDelete: EventEmitter<Plant> = new EventEmitter();
  public favorite: string = "../../../assets/img/icono_favorito.png";
  public delete: string = "../../../assets/img/icono_cancelar.png";

  public clickFavorite(): void {
    console.log("Favorite");
    this.plantFavorite.emit(this.plantRegister);
  }

  public clickDelete(): void {
    console.log("Delete");
    this.plantDelete.emit(this.plantRegister);
  }
}

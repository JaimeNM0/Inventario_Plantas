import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListPlantsComponent } from './list-plants/list-plants.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListPlantsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'InventarioPlantas';
  mode: string = '../../../assets/img/sol.png';

  public modeSwitching(): void {
    if (this.mode === '../../../assets/img/sol.png') {
      this.mode = '../../../assets/img/luna.png';
    } else {
      this.mode = '../../../assets/img/sol.png';
    }
  }
}

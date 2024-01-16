import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlantsComponent } from './button-plants.component';

describe('ButtonPlantsComponent', () => {
  let component: ButtonPlantsComponent;
  let fixture: ComponentFixture<ButtonPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPlantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

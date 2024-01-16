import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetPlantsComponent } from './componet-plants.component';

describe('ComponetPlantsComponent', () => {
  let component: ComponetPlantsComponent;
  let fixture: ComponentFixture<ComponetPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponetPlantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponetPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

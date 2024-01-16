import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlantsComponent } from './form-plants.component';

describe('FormPlantsComponent', () => {
  let component: FormPlantsComponent;
  let fixture: ComponentFixture<FormPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPlantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

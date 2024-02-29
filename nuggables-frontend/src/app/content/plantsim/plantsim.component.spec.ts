import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsimComponent } from './plantsim.component';

describe('PlantsimComponent', () => {
  let component: PlantsimComponent;
  let fixture: ComponentFixture<PlantsimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantsimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

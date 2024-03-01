import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannabisComponent } from './cannabis.component';

describe('CannabisComponent', () => {
  let component: CannabisComponent;
  let fixture: ComponentFixture<CannabisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CannabisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CannabisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

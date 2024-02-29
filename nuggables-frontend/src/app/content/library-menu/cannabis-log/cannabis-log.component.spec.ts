import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannabisLogComponent } from './cannabis-log.component';

describe('CannabisLogComponent', () => {
  let component: CannabisLogComponent;
  let fixture: ComponentFixture<CannabisLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CannabisLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CannabisLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

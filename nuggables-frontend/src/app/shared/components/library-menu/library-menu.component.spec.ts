import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMenuComponent } from './library-menu.component';

describe('LibraryMenuComponent', () => {
  let component: LibraryMenuComponent;
  let fixture: ComponentFixture<LibraryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkSpaceComponent } from './park-space.component';

describe('ParkSpaceComponent', () => {
  let component: ParkSpaceComponent;
  let fixture: ComponentFixture<ParkSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParkSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

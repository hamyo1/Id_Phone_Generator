import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarIdGenratorComponent } from './car-id-genrator.component';

describe('CarIdGenratorComponent', () => {
  let component: CarIdGenratorComponent;
  let fixture: ComponentFixture<CarIdGenratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarIdGenratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarIdGenratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

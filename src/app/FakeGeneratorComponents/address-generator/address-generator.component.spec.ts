import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressGeneratorComponent } from './address-generator.component';

describe('AddressGeneratorComponent', () => {
  let component: AddressGeneratorComponent;
  let fixture: ComponentFixture<AddressGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

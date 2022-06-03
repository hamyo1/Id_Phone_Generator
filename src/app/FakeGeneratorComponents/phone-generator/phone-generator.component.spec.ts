import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneGeneratorComponent } from './phone-generator.component';

describe('PhoneGeneratorComponent', () => {
  let component: PhoneGeneratorComponent;
  let fixture: ComponentFixture<PhoneGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealCarIdFromDataGovComponent } from './real-car-id-from-data-gov.component';

describe('RealIdFromDataGovComponent', () => {
  let component: RealCarIdFromDataGovComponent;
  let fixture: ComponentFixture<RealCarIdFromDataGovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealCarIdFromDataGovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealCarIdFromDataGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

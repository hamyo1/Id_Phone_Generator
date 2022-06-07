import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandNameEmailComponent } from './rand-name-email.component';

describe('RandNameEmailComponent', () => {
  let component: RandNameEmailComponent;
  let fixture: ComponentFixture<RandNameEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandNameEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandNameEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassengerComponent } from './massenger.component';

describe('MassengerComponent', () => {
  let component: MassengerComponent;
  let fixture: ComponentFixture<MassengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepientRegistrationComponent } from './recepient-registration.component';

describe('RecepientRegistrationComponent', () => {
  let component: RecepientRegistrationComponent;
  let fixture: ComponentFixture<RecepientRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepientRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepientRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

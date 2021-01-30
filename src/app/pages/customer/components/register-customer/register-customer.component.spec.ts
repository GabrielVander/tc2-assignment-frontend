import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterCustomerComponent } from './register-customer.component';

describe('RegisterCustomerComponent', () => {
  let component: RegisterCustomerComponent;
  let fixture: ComponentFixture<RegisterCustomerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

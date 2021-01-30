import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerTableComponent } from './customer-table.component';

describe('CustomerTableComponent', () => {
  let component: CustomerTableComponent;
  let fixture: ComponentFixture<CustomerTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

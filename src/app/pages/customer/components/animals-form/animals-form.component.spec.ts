import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalsFormComponent } from './animals-form.component';

describe('AnimalsFormComponent', () => {
  let component: AnimalsFormComponent;
  let fixture: ComponentFixture<AnimalsFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

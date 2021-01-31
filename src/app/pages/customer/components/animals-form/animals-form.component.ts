import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-animals-form',
  templateUrl: './animals-form.component.html',
  styleUrls: ['./animals-form.component.css']
})
export class AnimalsFormComponent {

  @Input()
  formGroup!: FormGroup;
  @Input()
  animalsList: BehaviorSubject<Animal[]>;
  isCollapse = false;

  constructor() {
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
  }

  add(): void {
    if (this.formGroup.valid) {
      const animal: Animal = {
        name: this.formGroup.controls.name.value,
        age: this.formGroup.controls.age.value,
        weight: this.formGroup.controls.weight.value,
        race: this.formGroup.controls.race.value,
        type: this.formGroup.controls.type.value,
      };

      this.animalsList.next([...this.animalsList.getValue(), animal]);
      this.formGroup.reset();
    }
  }
}

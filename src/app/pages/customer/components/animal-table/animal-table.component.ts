import {Component, Input, OnInit} from '@angular/core';
import {AnimalService} from '../../../../services/animal/animal.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-animal-table',
  templateUrl: './animal-table.component.html',
  styleUrls: ['./animal-table.component.css']
})
export class AnimalTableComponent implements OnInit {

  @Input()
  animalIds: string[] = [];
  animals = new BehaviorSubject<Animal[]>([]);
  loading = false;

  constructor(private animalService: AnimalService) {
  }

  ngOnInit(): void {
    this.getAnimals();
  }

  private getAnimals(): void {
    this.loading = true;
    Promise
      .all(this.animalIds.map(id => this.animalService.getById(id)))
      .then(responses => {
        this.animals.next(responses.map(response => response.data[0]));
        this.loading = false;
      }).catch(() => this.loading = false);
  }
}

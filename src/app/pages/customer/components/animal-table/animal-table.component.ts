import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-animal-table',
  templateUrl: './animal-table.component.html',
  styleUrls: ['./animal-table.component.css']
})
export class AnimalTableComponent implements OnInit {

  @Input()
  animals: Animal[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

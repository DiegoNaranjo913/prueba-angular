import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {

  constructor(private people: PeopleService) { }

  get persona() {
    return this.people.Personas;
  }

  ngOnInit(): void {
    this.people.buscarPersonas();
  }

}

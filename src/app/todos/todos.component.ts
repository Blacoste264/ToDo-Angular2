import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
      text: 'Pickup kids from school.'
      },
      {
        text: 'Meeting with boss.'
      },
      {
        text: 'Code, duh.'
      }
  ]
  }

}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItem: string | null; // Local Item can be null too so You can't just say only string
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = []; // Local item null matlab todos khaali rkhenge
    } else {
      this.todos = JSON.parse(this.localItem); // Else Array is parsed with the localStorage updated items
    }
  }
  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo); //todo is the one which is clicked/deleted
    const index = this.todos.indexOf(todo); //woh todo ka index
    this.todos.splice(index, 1); //start from index and 1 is ktne delete krne hai waha se
    //! 1 Save to Local storage once deleted (Save to local storage everytime it gets updated)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    //! 1 Save to Local storage once added (Save to local storage everytime it gets updated)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  checkboxTodo(todo: Todo) {
    console.log(todo); //todo is the one which is clicked
    const index = this.todos.indexOf(todo); //woh todo ka index
    this.todos[index].active = !this.todos[index].active;
    console.log(todo); // todo ka active false krdia ab

    //! 1 Save to Local storage once added (Save to local storage everytime it gets updated)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

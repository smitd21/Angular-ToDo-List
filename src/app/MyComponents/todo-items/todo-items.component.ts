import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('onClick has been triggered');
  }
  onCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }
}

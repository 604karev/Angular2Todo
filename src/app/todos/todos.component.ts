import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;


  constructor(private servise: TodoService) {
  }

  ngOnInit() {
    this.todos = this.servise.getTodo();
  }

  addTodo() {
    const newTodo = {text: this.text};
    this.todos.push(newTodo);
    this.servise.addTodo(newTodo);
  }

  removeTodo(id) {
    this.todos.splice(id, 1);
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(id, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

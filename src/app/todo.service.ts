import {Injectable} from '@angular/core';
import {Init} from './init';

@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log('TodoService Initialize... Bu very easy');
    this.load();
  }

  getTodo() {
    return JSON.parse(localStorage.getItem('todos'));
  }

  addTodo(newTodo) {
    const todos = this.getTodo();
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

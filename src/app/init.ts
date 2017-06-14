import {isUndefined} from 'util';

export class Init {
  load() {
    if (localStorage.getItem('todos') === null || isUndefined(localStorage.getItem('todos'))) {
      const todos = [
        {
          text: `Pickup kid at school`
        },
        {
          text: `Meeting with boss`
        },
        {
          text: `Diner with wife`
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      console.log('Found todos');
    }
  }
}

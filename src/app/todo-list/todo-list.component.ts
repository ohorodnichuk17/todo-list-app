import { Component } from '@angular/core';

interface Task {
   name: string;
   deadline: string;
   done: boolean;
   important: boolean;
}

@Component({
   selector: 'app-todo-list',
   templateUrl: './todo-list.component.html',
   styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
   tasks: Task[] = [
      { name: 'Hit the gym', deadline: '01.04.2023', done: false, important: false },
      { name: 'Pay bills', deadline: '29.03.2023', done: true, important: true },
      { name: 'Meet John', deadline: '', done: false, important: false },
      { name: 'Buy eggs', deadline: '29.03.2023', done: false, important: true },
      { name: 'Read a book', deadline: '', done: true, important: false },
      { name: 'Organize office', deadline: '', done: false, important: false },
      { name: 'Eat dinner', deadline: '', done: false, important: false },
      { name: 'Buy apples', deadline: '05.03.2023', done: false, important: true },
      { name: 'Meet George', deadline: '', done: false, important: true },
      { name: 'Feed the cat', deadline: '', done: false, important: false },
      { name: 'Write a letter', deadline: '', done: true, important: false },
      { name: 'Run 1 km', deadline: '15.01.2022', done: false, important: false }
   ];

   toggleTask(task: Task): void {
      task.done = !task.done;
   }
}

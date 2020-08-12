import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodoItem: EventEmitter<Todo> = new EventEmitter()

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes={
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes
  }

  changeStatus(){
    this.todo.completed = !this.todo.completed
    this.todoService.updateTodo(this.todo).subscribe(todo => {
      console.log(todo)
    })
  }
  
  deleteTodo(){
    this.todoService.deleteTodo(this.todo).subscribe(todo =>{
      this.deleteTodoItem.emit(this.todo)
    })
  }
}

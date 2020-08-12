import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[]

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

  addTodo(todo: any){
    this.todoService.addTodo(todo).subscribe(todoItem =>{
      this.todos = [...this.todos, todoItem]
    })
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo).subscribe(isDeleted => {
      if(isDeleted){
        this.todos = this.todos.filter(todoItem => todoItem.id !== todo.id)
      }
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Todo } from '../models/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/todos'
  defaultLimit = '?_limit=10'
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.baseUrl}${this.defaultLimit}`)
  }

  addTodo(todo: any): Observable<Todo>{
    return this.http.post<Todo>(this.baseUrl, todo)
  }

  updateTodo(todo: Todo):Observable<Todo>{
    return this.http.put<Todo>(`${this.baseUrl}/${todo.id}`, todo)
  }

  deleteTodo(todo:Todo):Observable<Boolean>{
    return this.http.delete<true>(`${this.baseUrl}/${todo.id}`)
  }
}

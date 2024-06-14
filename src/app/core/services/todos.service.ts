import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.interface';
import { FilterEnum } from '../enums/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  public todoSignal=signal<Todo[]>([]);


  public addToDo(text:string,id:string){
    const newTodo:Todo={
      text,
      isCompleted:false,
      id
    }

    this.todoSignal.update((todos)=>[...todos,newTodo])
  }


  public changeTodo(text:string,id:string){
    this.todoSignal.update((todos)=>todos.map((todo)=>todo.id===id?{...todo,text}:todo))
  }

  public removeTodo(id:string){
    this.todoSignal.update((todos)=>todos.filter((todo)=>todo.id!==id))
  }

  public selectedTodo(id:string){
    this.todoSignal.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  public selectedAllTodos(isCompleted:boolean){
    this.todoSignal.update((todos)=>
      todos.map((todo)=>({...todo,isCompleted})))
  }



}

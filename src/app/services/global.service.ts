import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
export interface User{
  name:string,
  quote:string,
}
export interface Todo {
  id:number,
  todo:string,
  completed:boolean,
  isFavorite:boolean,
  isDeleted:boolean
}
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public isLoggedIn : boolean = false;
  public navbar : boolean = false;
  public footer : boolean = false;
  public task:any;
  public countFavTasks:number = 0;
  user:User = {
    name:"",
    quote:""
  }
  todos:Todo[] = []
  todoBody:string = ''
  isCompleted :Boolean = false;
  errorMessage:string = ""
  constructor(private _router:Router) {

  }
  isAuthenticated(){
    return this.isLoggedIn;
  }
  getUser(){
    return this.user;
  }
  getTasks(){
    return this.todos;
  }
  getDeletedTasks(){
    return this.todos.filter(todo => todo.isDeleted);
  }
  getFavoriteTasks(){
    return this.todos.filter(todo => todo.isFavorite);
  }
  getCountFav(){
    const count = this.todos.filter(todo => todo.isFavorite == true)
    return count.length;
  }
  getCountDel(){
    const count = this.todos.filter(todo => todo.isDeleted == true)
    return count.length;
  }
  getCompTaskPercent(){
    const TasksLen = this.todos.filter(todo => todo).length
    console.log("TasksLen : " + TasksLen)
    const compTasksLen : number = this.todos.filter(todo => todo.completed == true).length
    console.log("compTasksLen : " + compTasksLen)
    //console.log(((compTasksLen/TasksLen)*100).toFixed(2));
    if(TasksLen)
      return ((compTasksLen/TasksLen)*100).toFixed(2);
    else
      return 0;
  }
}

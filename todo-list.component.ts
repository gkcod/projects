import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  store : any[]= [];

  addTask(item : string){
    this.store.push({id : this.store.length,name : item});
    console.warn(this.store);
  }
  removeTask(id:number){
    console.warn(id)
    this.store =this.store.filter(item =>item.id!==id);

  }
}



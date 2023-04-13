import { Component } from '@angular/core';
import { TodoService } from '../service/todo/todo.service';

@Component
    ({
        selector: 'welcomeComponent',
        templateUrl: './welcome.component.html',
        styles: [`h2{color:green}`]
    }
    )
export class welcomeComponent {
    todos:{id:number,todo:string,completed:boolean,userId:number}[] = [];
    constructor(private user: TodoService) {
        this.todos = user.todos();
    }
}
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component
    ({
        selector: 'userDetailsComponent',
        template:`<h2>userDetails {{id}} is displyed</h2>`,
        styles: [`h2{color:red}`]
    }
    )
    export class userDetailsComponent{
        id:any='';
        constructor(private route:ActivatedRoute){
        }
        ngOnInit():void{
       this.id=this.route.snapshot.paramMap.get('id');
       console.log(this.id);

       }
    }
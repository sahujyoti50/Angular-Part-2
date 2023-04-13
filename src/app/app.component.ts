import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing-app';
  users: any = [];
  constructor(private userData: UserService) {}
    //get data
    // this.userData.users().subscribe((data) => {
    //   console.log(data);
    //   console.log(typeof data);

    //   this.users = data;
    // });
    //post Data
  //   this.userData.postData({
  //     "id": 7,
  //     "firstName": "Miles",
  //     "lastName": "Cummerata",
  //     "maidenName": "Maggio",
  //     "age": 49,
  //     "gender": "male",
  //     "email": "yraigatt3@nature.com",
  //     "phone": "+86 461 145 4186"
  //   },).subscribe((result) => console.log(result));
  // }
  ngOnInit() {

  }

}

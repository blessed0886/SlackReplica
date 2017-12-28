import { Component, OnInit } from '@angular/core';
import { CreateUserService } from '../../services/create-user.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private userService:CreateUserService ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => console.log(users))
  }

}

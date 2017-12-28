import { Component, OnInit } from '@angular/core';
import { CreateUserService } from '../../services/create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(create: CreateUserService) { }

  createUser()

  ngOnInit() {
  }

}

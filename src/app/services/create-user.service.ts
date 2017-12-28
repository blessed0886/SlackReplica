import { Injectable } from '@angular/core';
import { User } from '../objects/user-obj';
import { Users } from '../data/data';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';



@Injectable()
export class CreateUserService {

  constructor(private http: Http) { }

  addUser(userName:string, password:string, email:string){
    let newUser: User = new User(userName, password, email);
    this.http.post('http://localhost:8080/users', newUser).subscribe(user => console.log(user));
  }

  // getUserByUserName(userName: string): Observable<User>{
  //   return this.http.get('http://localhost:8080/users/'+userName).map(info =>{
  //     return {
  //       userName: info.userName,
  //       password: info.password,
  //       email: info.email,
  //       profile: info.profile
  //     };
  //   });
  // }

  getUserByUserName(userName:string):Observable<any>{
    return this.http.get('http://localhost:8080/users'+userName).map(user => console.log(user));
  }

  getAllUsers():Observable<any[]>{
    return this.http.get('http://localhost:8080/users').map(arr =>{
      return arr.json().map(user =>{
        return user;
      })
    })
  }

  // getAllUsers(): Observable<User[]>{
  //   return this.http.get('http://localhost:8080/users/').map(users =>{
  //     return users.json().map(info =>{
  //     return{
  //       userName: info.userName,
  //       password: info.password,
  //       email: info.email,
  //       profile: info.profile
  //     };
  //     });
  //   });
  // }

  deleteUser(userName:String) {
    this.http.delete('http://localhost:8080/users/' + userName).subscribe(res => console.log(res));
  }
}

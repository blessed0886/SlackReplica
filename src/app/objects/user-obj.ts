import { Profile } from './profile-obj'
export class User{
  private userName:string;
  private password:string;
  private email:string;
  private profile:Profile;

  constructor(userName:string, password:string, email:string){
    this.email = email;
    this.userName = userName;
    this.password = password;
    this.profile = new Profile();
  }

  getUserName():string{
    return this.userName;
  }
  getPassword():string{
    return this.password;
  }

  setUserName(name:string):void{
    this.userName = name;
  }

  setPassWord(password:string):void{
    this.password = password;
  }

  getEmail():string{
    return this.email;
  }

  setEmail(email: string){
    this.email = email;
  }

  getProfile(): Profile{
    return this.profile;
  }

}

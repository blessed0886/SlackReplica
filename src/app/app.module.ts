import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessageDisplayComponent } from './components/message-display/message-display';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { PostMessageComponent } from './components/post-message/post-message.component';
import { MessageComponent } from './components/message/message.component';
import { MessageService } from './services/message.service';
import { CreateUserService } from './services/create-user.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CreateUserComponent } from './components/create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageDisplayComponent,
    ActiveUsersComponent,
<<<<<<< HEAD
    PostToActiveChatComponent,
    PostComponent,
    CreateUserComponent

=======
    PostMessageComponent,
    MessageComponent
>>>>>>> edbddcd17102248cfb1fca9a3776b3cb10a8aa25
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [MessageService,CreateUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

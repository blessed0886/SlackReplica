import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActiveChatComponent } from './components/active-chat/active-chat.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { PostToActiveChatComponent } from './components/post-to-active-chat/post-to-active-chat.component';
import { PostComponent } from './components/post/post.component';
import { MessageService } from './services/message.service';
import { CreateUserService } from './services/create-user.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CreateUserComponent } from './components/create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ActiveChatComponent,
    ActiveUsersComponent,
    PostToActiveChatComponent,
    PostComponent,
    CreateUserComponent

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

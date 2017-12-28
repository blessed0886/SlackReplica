import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD:src/app/components/active-chat/active-chat.component.spec.ts
import { Http, Response } from '@angular/http';
import { ActiveChatComponent } from './active-chat.component';
=======

import { MessageDisplatComponent } from './message-display';
>>>>>>> edbddcd17102248cfb1fca9a3776b3cb10a8aa25:src/app/components/message-display/message-display.spec.ts
import {MessageService } from '../../services/message.service';
import { MessageComponent } from '../message/message.component';

describe('MessageDisplatComponent', () => {
  let component: MessageDisplatComponent;
  let fixture: ComponentFixture<MessageDisplatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:src/app/components/active-chat/active-chat.component.spec.ts
      declarations: [ ActiveChatComponent, PostComponent ],
      providers:[ MessageService, Http ]
=======
      declarations: [ MessageDisplatComponent, MessageComponent ],
      providers:[ MessageService ]
>>>>>>> edbddcd17102248cfb1fca9a3776b3cb10a8aa25:src/app/components/message-display/message-display.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDisplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, Response } from '@angular/http';
import { ActiveChatComponent } from './active-chat.component';
import {MessageService } from '../../services/message.service';
import { PostComponent } from '../../components/post/post.component';

describe('ActiveChatComponent', () => {
  let component: ActiveChatComponent;
  let fixture: ComponentFixture<ActiveChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveChatComponent, PostComponent ],
      providers:[ MessageService, Http ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

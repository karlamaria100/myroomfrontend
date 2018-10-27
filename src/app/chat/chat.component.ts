import {Component, ElementRef, OnInit} from '@angular/core';
import {Message} from '../models/message.model';
import {environment} from '../../environments/environment';
import {MessagesService} from '../services/messages.service';
import {ThreadsService} from '../services/threads.service';
import {UsersService} from '../services/users.service';
import {User} from '../models/user.model';
import {Thread} from '../models/thread.model';
import {DirectLine} from 'botframework-directlinejs';
import {SharedService} from '../services/shared.service';
import {Observable} from 'rxjs';
import {Setup} from '../setup/setup';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(
    public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public usersService: UsersService,
    public el: ElementRef
  ) {
    Setup.init(messagesService, threadsService, usersService);
  }

  ngOnInit(): void {
    this.messages = this.threadsService.currentThreadMessages;

    this.draftMessage = new Message();

    this.threadsService.currentThread.subscribe((thread: Thread) => {
      this.currentThread = thread;
    });

    this.usersService.currentUser.subscribe((user: User) => {
      this.currentUser = user;
    });

    this.messages.subscribe((messages: Array<Message>) => {
      setTimeout(() => {
        this.scrollToBottom();
      });
    });
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.messagesService.addMessage(m);
    this.draftMessage = new Message();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el.nativeElement.querySelector(
      '.chat-card-content'
    );
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }


}

import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Message } from '../models/message.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.currentUser.subscribe((user: User) => {
      this.currentUser = user;
      if (this.message.author && user) {
        this.incoming = this.message.author.id !== user.id;
      }
    });
  }
}

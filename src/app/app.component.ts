import { Component, ElementRef, OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { ThreadsService } from './services/threads.service';
import { UsersService } from './services/users.service';
import { Setup } from './setup/setup';
import { Observable } from 'rxjs';
import { Thread } from './models/thread.model';
import { User } from './models/user.model';
import { Message } from './models/message.model';
import {environment} from '../environments/environment';
import {DirectLine} from 'botframework-directlinejs';
import {SharedService} from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(public shared: SharedService) {

  }

  ngOnInit(): void {

  }
}

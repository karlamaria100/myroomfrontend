import { Injectable } from '@angular/core';
import {DirectLine} from 'botframework-directlinejs';
import {Message} from '../models/message.model';
import {Thread} from '../models/thread.model';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public directLine: DirectLine;
  public fqaMaster: User;
  public currentThread: Thread;
  public initialMessages: Message[];
  currentUser: User;

  public url: "http://localhost:8083/myroom";


  constructor() { }
}

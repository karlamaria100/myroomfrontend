import { Injectable } from '@angular/core';
import {DirectLine} from 'botframework-directlinejs';
import {Message} from '../models/message.model';
import {Thread} from '../models/thread.model';
import {User} from '../models/user.model';

@Injectable()
export class SharedService {



  public directLine: DirectLine;
  public fqaMaster: User;
  public currentThread: Thread;
  public initialMessages: Message[];
  currentUser: User;

  public url = "http://104.46.34.66";
  companies: any;
  rooms: any;
  accommodations: any;
  sessions: any;
  departments: any;
  general: any = [];
  string: string;


  constructor() { }
}

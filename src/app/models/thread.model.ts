import { Message } from './message.model';
import * as uuid from 'uuid';

export class Thread {
  id: string;
  lastMessage: Message;
  name: string;

  constructor(id?: string, name?: string) {
    this.id = id || uuid();
    this.name = name;
  }
}

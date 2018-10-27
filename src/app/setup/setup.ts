
import * as moment from 'moment';
import { DirectLine } from 'botframework-directlinejs';
import { environment } from '../../environments/environment';
import {User} from '../models/user.model';
import {Thread} from '../models/thread.model';
import {Message} from '../models/message.model';
import {MessagesService} from '../services/messages.service';
import {ThreadsService} from '../services/threads.service';
import {UsersService} from '../services/users.service';

const directLine = new DirectLine({
  secret: environment.API_KEY
});

const me: User = new User('You');
const masterUser: User = new User('FQA Master');
const thread: Thread = new Thread(
  'fqaMaster',
  masterUser.name,
);

const initialMessages: Array<Message> = [
  new Message({
    author: masterUser,
    sentAt: new Date(),
    text: 'Hello, do you have any questions about this project?',
    thread: thread
  })
];

export class Setup {
  static init(
    messagesService: MessagesService,
    threadsService: ThreadsService,
    usersService: UsersService
  ): void {
    messagesService.messages.subscribe(() => ({}));

    usersService.setCurrentUser(me);

    // Create the initial messages
    initialMessages.map((message: Message) =>
      messagesService.addMessage(message)
    );

    threadsService.setCurrentThread(thread);

    this.setupBots(messagesService);
  }

  static setupBots(messagesService: MessagesService): void {
    // Send our messages to Miss Moneypenny
    messagesService
      .messagesForThreadUser(thread, masterUser)
      .forEach((message: Message): void => {
        directLine
          .postActivity({
            from: { id: message.author.name },
            type: 'message',
            text: message.text
          })
          .subscribe(
            id => {},
            error => console.log('Error posting activity', error)
          );
      }, null);

    // Watch incoming messages from our bot
    directLine.activity$
      .filter(
        activity =>
          activity.type === 'message' && activity.from.id === 'myroombot'
      )
      .subscribe(message =>
        messagesService.addMessage(
          new Message({
            author: masterUser,
            text: message['text'],
            thread: thread
          })
        )
      );
  }
}

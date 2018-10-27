import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessagesService } from './services/messages.service';
import { ThreadsService } from './services/threads.service';
import { UsersService } from './services/users.service';
import { FormsModule } from '@angular/forms';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FromNowPipe } from './from-now.pipe';
import { ChatComponent } from './chat/chat.component';
import {SharedService} from './services/shared.service';

@NgModule({
  declarations: [AppComponent, ChatMessageComponent, FromNowPipe, ChatComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [MessagesService, ThreadsService, UsersService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule, MatDialogModule
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
import { PresentationComponent } from './presentation/presentation.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, ChatMessageComponent, FromNowPipe, ChatComponent, PresentationComponent, LoginComponent, RegisterComponent],
  imports: [
    MatDialogModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  // exports:[ AppRoutingModule],
  providers: [MessagesService, ThreadsService, UsersService, SharedService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, RegisterComponent]
})
export class AppModule {}

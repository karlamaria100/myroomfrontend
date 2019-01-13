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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FromNowPipe } from './from-now.pipe';
import { ChatComponent } from './chat/chat.component';
import {SharedService} from './services/shared.service';
import { PresentationComponent } from './presentation/presentation.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MainService} from './services/main.service';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';
import {AuthGuard} from './auth.service';

@NgModule({
  declarations: [AppComponent, ChatMessageComponent, FromNowPipe, ChatComponent, PresentationComponent, LoginComponent, RegisterComponent, DashboardComponent, DashboardLandingComponent],
  imports: [
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MessagesService, ThreadsService, UsersService, SharedService, MainService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

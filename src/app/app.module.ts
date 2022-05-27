import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChatBotComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {demoService} from './app.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [demoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

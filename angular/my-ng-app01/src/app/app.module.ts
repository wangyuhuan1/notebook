import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import {HttpClientModule} from '@angular/common/http';
import { HeadComponent } from './components/head/head.component'
@NgModule({
  //注册组件
  declarations: [
    AppComponent,
    ContentComponent,
    HeadComponent,
  ],
  //第三方模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

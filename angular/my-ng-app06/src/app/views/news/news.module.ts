import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NightComponent } from './components/night/night.component';
import { MorningComponent } from './components/morning/morning.component';


@NgModule({
  declarations: [NewsComponent, NightComponent, MorningComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }

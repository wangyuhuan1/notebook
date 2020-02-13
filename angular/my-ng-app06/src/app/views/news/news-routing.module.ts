import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news.component'
import {MorningComponent} from './components/morning/morning.component'
import {NightComponent} from './components/night/night.component'

const routes: Routes = [
  {
    path:"",
    component:NewsComponent,
    children:[
      {
        path:"morning",
        component:MorningComponent
      },
      {
        path:"night",
        component:NightComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }

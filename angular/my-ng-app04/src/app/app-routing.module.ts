import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { MorningComponent } from './components/morning/morning.component';
import { NightComponent } from './components/night/night.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'news',
    component: NewsComponent,
    children:[
      {
        path:"morning",
        component:MorningComponent
      },
      {
        path:"night",
        component:NightComponent
      },
      {
        path:"",
        redirectTo:"morning",
        pathMatch:"full"
      }
    ]
  }, {
    path: 'about',
    component: AboutComponent
  },{
    path:"detail",
    component:DetailComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },{
    path:"**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

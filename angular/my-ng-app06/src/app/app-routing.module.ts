import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"home",
    loadChildren:()=>import('./views/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:"about",
    loadChildren:()=>import('./views/about/about.module').then(m=>m.AboutModule)
  },
  {
    path:"news",
    loadChildren:()=>import('./views/news/news.module').then(m=>m.NewsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

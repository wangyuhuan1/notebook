## 一、配置一个路由模块

```
ng g module views/home --routing
ng g component views/home  //配置主组件
```

## 二、配置模块中的路由

```js
//home-routing.module.ts
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:"",component:HomeComponent}
];
```

## 三、配置主路由

```js
const routes: Routes = [
  {
    path:"home",
    loadChildren:()=>import('./views/home/home.module').then(m=>m.HomeModule)
  }
];
```


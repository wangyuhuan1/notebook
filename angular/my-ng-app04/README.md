

## 一、配置路由

```js
//app-routing.module.ts
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'news',
    component: NewsComponent
  }, {
    path: 'about',
    component: AboutComponent
  }
];
```

## 二、路由重定向

```js
//app-routing.module.ts
const routes: Routes = [
    ...
    //重定向
    {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  }
];
```

## 三、错误页面返回404

```js
//app-routing.module.ts
import { ErrorComponent } from './components/error/error.component';
const routes: Routes = [
  ...
  {
    path:"**",
    component:ErrorComponent
  }
];
```

## 四、router-link链接

```js
//app.component.html
<ul>
  <li><a [routerLink]="['/home']">home</a></li>
  <li><a [routerLink]="['/news']">news</a></li>
  <li><a [routerLink]="['/about']">about</a></li>
</ul>
<router-outlet></router-outlet>
```

## 五、get传值

```js
//home.component.ts
export class HomeComponent implements OnInit {
  public id:string="123"
  constructor() { }
}
```

```js
//home.component.html
<a [routerLink]="['/detail']" [queryParams]="{id:id}">跳转detail</a>
```

```js
//detail.component.ts
//接收
import {ActivatedRoute} from '@angular/router'  //1.导入正在显示的路由
export class DetailComponent implements OnInit {
  constructor(public route:ActivatedRoute) { }  //2.构造函数中配置
  ngOnInit() {
    this.route.queryParams.subscribe(res=>{   //3.subscribe触发
      console.log(res)
    })
  }
}
```

## 六、动态路由

```js
{
    path:"detail/:id",
    component:DetailComponent
  },
```

```js
//第一种跳转方式
<a [routerLink]="['/detail',id]">跳转detail</a>
```

```js
//第二种跳转方式
<a [routerLink]="/detail/{{id}}">跳转detail</a>
```

```js
//detail.component.ts
//接收
import {ActivatedRoute} from '@angular/router'  //1.导入正在显示的路由
export class DetailComponent implements OnInit {
  constructor(public route:ActivatedRoute) { }  //2.构造函数中配置
  ngOnInit() {
    this.route.params.subscribe(res=>{   //3.subscribe触发
      console.log(res)
    })
  }
}
```

## 七、点击事件跳转

```js
//动态路由的事件跳转
<button (click)="handleClick()">跳转detail</button>

import {Router} from '@angular/router'
export class HomeComponent implements OnInit {
  public id:string="123"
  constructor(private router:Router) { }

  ngOnInit() {
  }
  handleClick(){
    this.router.navigate(['/detail',this.id])
  }
}
```

```js
//get传值的事件跳转
import {Router,NavigationExtras} from '@angular/router'
export class HomeComponent implements OnInit {
  public id:string="123"
  constructor(private router:Router) { }
  ngOnInit() {
  }
  handleClick(){
    let navigationExtras:NavigationExtras={
      queryParams:{
        "id":"1214"
      }
    }
    this.router.navigate(['/detail'],navigationExtras)
  }
}
```

## 八、二级路由

````js
{
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
  }
````

```js
//在父路由对应的组件中的html中加
<router-outlet></router-outlet>
```


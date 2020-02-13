## 一、service

### 1-1 生成服务

```
ng g service services/common
```

### 1-2 根模块中配置

```js
//app.module.ts

import {CommonService} from './services/common.service'
@NgModule({
  ...
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 1-3 组件中使用服务

```js
export class CommonService {
  public defaultCity:string="武汉"
  constructor() { }
}
```

```js
//1.导入服务
import {CommonService} from '../../services/common.service'
export class HomeComponent implements OnInit {
    //2.构造函数中配置
  constructor(public common:CommonService) { }
    
  ngOnInit() {
     //3.使用
    console.log(this.common.defaultCity)
  }
}
```

### 1-4 更改服务

//组件中

```js
<button *ngFor="let item of hotCities" (click)="handleClick(item)">{{item}}</button>
```

```js
  handleClick(item:string){
    console.log(item)
    this.common.changeCity(item);
  }
```

```js
//service
  changeCity(value:string){
    this.defaultCity=value;
  }
```

### 1-5 缓存

```js
  //service
  getCity(){
    if(localStorage.getItem("city")){
      this.defaultCity=localStorage.getItem("city")
    }
    return this.defaultCity
  }
  changeCity(value:string){
    ...
    localStorage.setItem("city",value)
  }
```

```js
//组件
export class HomeComponent implements OnInit {
  public city:any;
  constructor(public common:CommonService) { }
  
  ngOnInit() {
    this.city=this.common.getCity()
  }
}
```

## 二、生命周期和DOM获取

```js
  ngAfterViewInit(){
    var show:any=document.getElementById("show")
    console.log(show)
  }
```


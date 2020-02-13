## 一、双向数据绑定

#### 1-1 app.module.ts中配置

```ts
import {FormsModule} from '@angular/forms'
imports: [
    BrowserModule,
    FormsModule
  ],
```

#### 1-2 组件中使用

```
<input type="text"
 [(ngModel)]="msg">
```

## 二、(change)

```
<input type="text"
(change)="handleChange($event)"
 [(ngModel)]="msg">
```

```
handleChange(e){
    console.log(e.target)
  }
```

## 三、(ngModelChange)

> 只要ngModel依赖的值改变的时候,就会触发
>
> ngModel一定要写在ngModelChange的前面

```
<input type="text"
 [(ngModel)]="msg"
 (ngModelChange)="handleChange()"
 >
<p>{{msg}}</p>
```

```ts
<input type="checkbox" 
[(ngModel)]="checked"
(ngModelChange)="inputChange()"
>
```

## 四、ant-design

#### 4-1 自动构建

```
ng add ng-zorro-antd
```

## 五、发送http

#### 5-1 app.module.ts配置

```js
import {HttpClientModule} from '@angular/common/http'
imports: [
    BrowserModule,
    HttpClientModule
  ],
```

#### 5-2 在发送http请求的组件中配置HttpClient,作为构造函数的参数设置

```ts
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
...
export class ContentComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string = "http://192.168.14.15:5000/dj/program?rid=336355127"
	this.http.get(url).subscribe(res=>{
      console.log(res)
    })
  }

}

```

## 六、父子组件传值

#### 6-1 在父组件中,子组件通过属性接收父组件传递过来的参数

```
<app-header [title]="title"></app-header>
```

#### 6-2 子组件中引入Input模块

```
import { Component, OnInit,Input } from '@angular/core';
```

#### 6-3 @Input注册

```js
export class HeaderComponent implements OnInit {
  @Input() title:string;
  constructor() { }

  ngOnInit() {
  }

}
```




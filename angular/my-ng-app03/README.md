## 一、父子组件传参

```js
//子组件通过属性接受父组件传递过来的方法
//父组件代码
<app-header [title]="title" [run]="run"></app-header>

//app.component.ts
  run(id:string){
    console.log(id)
  }
```

```js
 //子组件里注册参数
 @Input() run:any; 
```

```js
//子组件传递
<button (click)="handleClick()">向父传参</button>

  handleClick(){
    this.run("1234")
  }
```

## 二、父组件中使用子组件的数据

```js
//1.给子组件一个名字
//父组件代码
<app-content #content></app-content>
```

```js
//2.配置父组件
import { Component ,ViewChild} from '@angular/core';  

export class AppComponent {
  @ViewChild('content',{static:false}) content:any;
}
```

```js
//3.父组件使用
<p>{{content.msg}}</p>
```


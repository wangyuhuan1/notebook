## 一、生产一个组件

```
ng g component componets/header 
```

项目结构

```js
app.module.ts //根模块
@NgModule({
  // 注册组件
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 二、指令ngFor,ngIf

```js
<div *ngFor="let item of arr">{{item.name}}</div>
<div *ngIf="isShow">你好</div>
```

## 三、属性绑定 [src]

```js
<img [src]="imageUrl" >
```

## 四、事件 

#### 4-1 (click)

```
<p (click)="handleClick()">{{msg}}</p>
```

```js
export class HeaderComponent implements OnInit {
  ....
  public msg:string ="我喜欢写代码"
  constructor() { }
  ngOnInit() {
  }
  handleClick(){
    this.msg = "change"
  }
}
```

#### 4-2 （keyup）

```
<input type="text" (keyup)="handleEnter($event)">
```

```js
handleEnter(event:any){
    console.log(event.keyCode)
}
```

#### 4-3 (keyup.enter)

```js
handleEnter(value:string){
    console.log(value)
}
```


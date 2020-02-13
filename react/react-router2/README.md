## 一、二级路由

```js
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Morning from './components/Morning'
import Night from './components/Night'
class About extends Component {
    render() {
        return (
            <div>
                关于页面
                <div>
                    <Switch>
                        //两种方法
                        <Route path='/about/morning'>
                            <Morning/>
                        </Route>
                        <Route path='/about/night' component={Night}></Route>  
                        //Route中间不能有空格
                    </Switch>
                </div>
            </div>
        );
    }
}

export default About;
```

## 二、生命周期

```
//页面初次加载
contructor
render
componentDidMount
//数据改变时
render
componentDidUpdate
//组件销毁时

```

## 三、内联样式

```js
class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            color:"blue"
        }
    }
    render() {
        return (
            <div>
                <p style={{width:300,marginLeft:"10px",color:this.state.color}}>内联样式</p>
                详情页
            </div>
        );
    }
}
```

## 四、redux

```
yarn add redux
```

```javascript
//store/index.js  配置redux
import { createStore } from 'redux'
import reducer from './reducer'
//createStor只能接收函数
let store=createStore(reducer)
export default store;

//store/reducer.js
const defaultState={
    msg:"react很不好用"
}
const reducer=(state=defaultState,action)=>{
    return state;
}
export default reducer;
```

```javascript
//页面里面使用redux中的数据
import store from '../store'
    componentDidMount(){
        console.log(store.getState())
    }
```

更改数据

```javascript
//1.派发action给reducer.js    
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    
     <p>{this.state.msg}</p>
     <button onClick={this.handleClick}>改变</button>
     
      handleClick=()=>{
        const action={
            type:"btn_value",
            value:"redux很难用"
        }
        store.dispatch(action)
    }
```

```javascript
//reducer.js
const reducer=(state=defaultState,action)=>{
    console.log(action)
    if(action.type==="btn_value"){
        let newState={...state};
        newState.msg=action.value;
        return newState;
    }
    return state;
}
```

```javascript
//页面更新数据
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange=()=>{
        this.setState(store.getState())
    }
```

```js
    switch (action.type) {
        case "change_inlput_value":
            let newState = { ...state };
            newState.msg = action.value;
            return newState;
        case "add_todo_item":
            let newState={...state};
            newState.list.push(newState.msg)
            return newState
        default:
            return state;
    }
```


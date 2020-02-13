## 一、ant

#### 1-1 安装ant

```react
yarn add antd
```

#### 1-2 导入组件

```react
//index.js
import 'antd/dist/antd.css'
```

#### 1-3 使用

```react
//App.js
import {Button} from 'antd'
<Button type="primary">ant</Button>
```

```react
Reactjs code snippets //插件
React-Native/React/Redux snippets for es6/es7 //插件
rcc  //快捷键
```

## 三、react-router

```react
yarn add react-router-dom
```

```react
//app.js
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './views/Home'
import About from './views/About'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    {/* exact路由的严格匹配，只有路径为/才会加载对应的路由 */}
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/about/fs" component={About}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
```

## 四、跳转

```react
//1.link跳转
<Link to={`/detail?id=${this.state.id}`}>
     <Button>detail</Button>
</Link>
```

```react
//2.事件跳转
    render() {
        return (
            <div>
                主页
                <Button onClick={this.handleToggle}>detail</Button>
            </div>
        );
    }
    handleToggle=()=>{
        this.props.history.push(`/detail?id=${this.state.id}`)
    }
```

```react
//3.分解get传值
yarn add query-string
import queryString from 'query-string'
componentDidMount(){
    var url=this.props.location.search
    console.log(queryString.parse(url))
}
```

```react
//4.动态路由
<Route path="/detail/:id" component={Detail}></Route>
```

```react
//接收
componentDidMount(){
    console.log(this.props.match.params)
}
```


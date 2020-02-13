### 一、react中的样式

```react
//1.class要写成className(class在react中代表类)
<div className="App">
      hello world
</div>
```

### 二、组件传值

#### 2-1 定义组件

```react
//Header.js
import React from 'react';
function Header(){
    return (<div>component</div>)
}
export default Header;
```

#### 2-2 引入组件

```react
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello world",
      content:"我喜欢写React"
    }
  }
  render() {
    return (
      <div>
        <p className="App">{this.state.msg}</p>
        <Header msg={this.state.content}></Header>
      </div>
    )
  }
}
```

#### 2-3 组件接收传值

```react
function Header(props){
    return (<div>{props.msg}</div>)
}
```

### 三、styled-components

#### 3-1 安装依赖

```react
//避免样式命名空间重复
yarn add styled-components
```

#### 3-2 创建一个样式组件

```react
//components/Wrapper.js
import styled from 'styled-components'
const Title=styled.h1`
font-size:1.5em;
text-align:center;
color:#c0c342
`
export default Title
```

#### 3-3 使用

```react
import React from 'react';
import Title from './components/Wrapper'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello world",
      content:"我喜欢写React"
    }
  }
  render() {
    return (
      <div>
        <Title>styled</Title>
        <p className="App">{this.state.msg}</p>
        <Header msg={this.state.content}></Header>
      </div>
    )
  }
}

export default App;

```

```react
//嵌套
import styled from 'styled-components'
const Title=styled.h1`
font-size:1.5em;
text-align:center;
color:#c0c342
.one{
    color:blue;
}
h4{
    color:red
}
&:hover{
    color:green
}
`
export default Title
```

### 四、组件

#### 4-1 父组件给子组件传参

```react
//子组件
import React from 'react';
class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <h1 onClick={this.handleClick.bind(this,"11313")}>{this.props.msg}</h1>
        )
    }
    handleClick=(id)=>{
        console.log(id)
        this.props.deleteItem(id)
    }
}
export default Title
```

```react
//父组件
import Title from './components/Title'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello world",
      content:"我喜欢写React"
    }
  }
  render() {
    return (
      <div>
        <Title 
        deleteItem={this.handleDelete.bind(this)}
        msg={this.state.msg}></Title>
      </div>
    )
  }
  handleDelete(id){
    console.log(id)
  }
}

export default App;

```

### 四、http请求

基本和vue完全相似 

```react
//axios挂载到原型上
import axios from 'axios';
React.Component.prototype.$http = axios;
```

```react
  componentDidMount() {
    var url="https://music.aityp.com/top/playlist"
    this.$http.get(url).then(res => {
      var playlists = res.data.playlists
      this.setState({
        playlists
      })
    })
  }
```
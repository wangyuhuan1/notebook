## 一、组件

```react
//Tips:每一个页面级的组件第一行必须加
import React from 'react';
```

## 二、无状态组件

```

```



## 三、组件（可以写事件）

```react
import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      msg:"hello world"
    }
  }
  render(){
    return(
      <div>{this.state.msg}</div>
    )
  }
}
//jsx
export default App;
```

### 3-1 事件

```react
  render(){
    return(
       //改变this的指向
      <div onClick={this.handleClick.bind(this)}>{this.state.msg}</div>
    )
  }
  handleClick(){
    this.setState({
      msg:"change"
    })
  }
```

```react
  render(){
    return(
      <div onClick={this.handleClick}>{this.state.msg}</div>
    )
  }
  handleClick=()=>{
    this.setState({
      msg:"change"
    })
  }
```

### 3-2 点击事件传参

```react
  render(){
    return(
      <div onClick={this.handleClick.bind(this,this.state.id)}>{this.state.msg}</div>
    )
  }
  handleClick=(id)=>{
    console.log(id)
  }
```




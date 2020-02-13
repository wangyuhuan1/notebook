import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello world",
      id: 10001,
      isShow: true,
      arr: [1, 2, 3]
    }
  }
  render() {
    return (
      <div>
        {/* <p>{this.state.isShow?'good':'bad'}</p> */}
        {this.Message()}
        <div onClick={this.handleClick.bind(this, this.state.id)}>{this.state.msg}</div>
        <input type="text" onKeyUp={this.handleKeyUp} />
        <div>{this.state.arr.map(item => {
          return (<p>{item}</p>)
        })}</div>
      </div>
    )
  }
  // handleClick(){
  //   this.setState({
  //     msg:"change"
  //   })
  // }
  Message() {
    if (this.state.isShow) {
      return (<span>显示</span>)
    } else {
      return (<span>隐藏</span>)
    }
  }
  handleKeyUp = (event) => {
    console.log(event.keyCode)
  }
  handleClick = (id) => {
    console.log(id)
    this.setState({
      msg: "change"
    })
  }
}
export default App;

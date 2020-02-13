import React from 'react';
import './App.css'
// import Header from './Header'
// import Title from './components-style/Wrapper'
import Title from './components/Title'
// import axios from 'axios'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello world",
      content: "我喜欢写React",
      playlists: []
    }
  }
  render() {
    return (
      <div>
        {/* <Title>
          react
          <p class="one">hello world</p>
          <h4>h4</h4>
        </Title> */}
        
        {/* <p className="App">{this.state.msg}</p>
        <Header msg={this.state.content}></Header> */}
        <Title
          deleteItem={this.handleDelete.bind(this)}
          msg={this.state.msg}></Title>
        <div>{this.state.playlists.map(item => {
          return (<p>{item.name}</p>)
        })}</div>
      </div>
    )
  }
  handleDelete(id) {
    console.log(id)
  }
  componentDidMount() {
    var url="https://music.aityp.com/top/playlist"
    this.$http.get(url).then(res => {
      var playlists = res.data.playlists
      this.setState({
        playlists
      })
    })
  }
}

export default App;

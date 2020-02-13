import React from 'react';
/* react所有的组件都继承自React.Component */
import './App.css'
import axios from 'axios'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      musics:[]
    }
  }
  /* html是写在render函数中用的 */
  render(){
    return(
      <div>
        <div>
          {this.state.musics.map(item=>{
            return(<div key={item.id}>
              <img src={item.coverImgUrl} alt={item.name}></img>
              <p>{item.name}</p>
            </div>)
          })}
        </div>
      </div>
    )
  }
  componentDidMount(){
    var url="http://192.168.14.49:5000/top/playlist?cat=华语"
    axios.get(url).then(res=>{
      console.log(res.data.playlists)
      this.setState({
        musics:res.data.playlists
      })
    })
  }

}
// function App() {
//   return (
//     <div className="App">
//       hello world
//     </div>
//   );
// }
export default App;

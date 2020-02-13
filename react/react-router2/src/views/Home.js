import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd'
class Home extends Component {
    constructor(props) {
        super(props);
        console.log("contructor")
        this.state = {
            id: 1001,
            msg: "hello world"
        }
    }
    render() {
        console.log("render")
        return (
            <div>
                主页
                {/* <Link to={`/detail?id=${this.state.id}`}>
                    <Button>detail</Button>
                </Link> */}
                <Button onClick={this.handleToggle}>detail</Button>
                {/* <button ref={(btn)=>{this.btn=btn}}>按钮</button> */}

                <p>{this.state.msg}</p>
                <button onClick={this.handleChange}>按钮</button>
            </div>
        );
    }
    handleToggle = () => {
        this.props.history.push(`/detail/${this.state.id}`)
    }
    handleChange=()=>{
        this.setState({
            msg:"change"
        })
    }
    componentDidMount() {
        console.log("componentDidMount")
        // console.log(this.btn)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
        // console.log(this.btn)
    }
}

export default Home;
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'antd'
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            id:1001
        }
    }
    render() {
        return (
            <div>
                主页
                {/* <Link to={`/detail?id=${this.state.id}`}>
                    <Button>detail</Button>
                </Link> */}
                <Button onClick={this.handleToggle}>detail</Button>
            </div>
        );
    }
    handleToggle=()=>{
        this.props.history.push(`/detail/${this.state.id}`)
    }
}

export default Home;
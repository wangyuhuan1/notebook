import React, { Component } from 'react';
// import queryString from 'query-string'
import store from '../store'
import { Input, Button, List } from 'antd'
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <div>
                <Input style={{ width: 300, marginRight: "20px" }}
                    value={this.state.msg}
                    onChange={this.handleChange}
                    placeholder="Basic usage" />
                <Button type="primary" onClick={this.handleAdd}>添加</Button>
                {/* <div>{this.state.list.map((item, index) => {
                    return (<p key={index}>{item}</p>)
                })}</div> */}

                <List
                    itemLayout="horizontal"
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                    <List.Item actions={[<a key="list-loadmore-edit" onClick={this.handleDelete.bind(this,index)}>删除</a>]}>{item}</List.Item>
                    )}
                />,
            </div>
        );
    }
    handleStoreChange = () => {
        this.setState(store.getState())
    }
    handleChange = (e) => {
        // console.log(e.target.value)
        let action = {
            type: "change_input_value",
            value: e.target.value
        }
        store.dispatch(action)
    }
    handleAdd = () => {
        let action = {
            type: "add_todo_item"
        }
        store.dispatch(action)
    }
    handleDelete=(index)=>{
        console.log(index)
        let action={
            type:"delete_todo_item",
            value:index
        }
        store.dispatch(action)
    }
}

export default Detail;
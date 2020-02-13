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
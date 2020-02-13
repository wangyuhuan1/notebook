import React, { Component } from 'react';
import queryString from 'query-string'
class Detail extends Component {
    render() {
        return (
            <div>
                详情页
            </div>
        );
    }
    componentDidMount(){
        console.log(this.props.match.params)
    }

}

export default Detail;
import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Morning from './components/Morning'
import Night from './components/Night'
class About extends Component {
    render() {
        return (
            <div>
                关于页面
                <div>
                    <Switch>
                        <Route path='/about/morning'>
                            <Morning/>
                        </Route>
                        <Route path='/about/night' component={Night}></Route>
                        <Redirect from='/about' to="/about/morning"></Redirect>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default About;
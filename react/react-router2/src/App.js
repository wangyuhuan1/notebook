import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './views/Home'
import About from './views/About'
import Detail from './views/Detail'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    {/* exact路由的严格匹配，只有路径为/才会加载对应的路由 */}
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/detail/:id" component={Detail}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
import React from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import Main from './main'
import About from './about'
import Topic from './topic'
export default class Home extends React.Component {
    render() {
        return(
            <HashRouter>
                {/* HashRouter下必须有一个根节点 */}
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    {/* component是小写 exact精确匹配路由 */}
                    {/* <Route exact={true} path="/" component={Main}></Route> */}
                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}
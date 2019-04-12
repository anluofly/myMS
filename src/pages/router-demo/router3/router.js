import React from 'react'
// as 取别名
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Main from './main'
import Info from './info'
import Topic from './../router1/topic'
import About from './../router1/about'
import Home from './home'
import NoMatch from './noMatch'

export default class IRouter extends React.Component {
    render() {
        return(
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={()=>
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        );
    }
}
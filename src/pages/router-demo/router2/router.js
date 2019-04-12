import React from 'react'
// as 取别名
import {HashRouter as Router, Route} from 'react-router-dom'

import Main from './../router1/main'
import About from './../router1/about'
import Topic from './../router1/topic'
import Home from './home'

export default class IRouter extends React.Component {
    render() {
        return(
            <Router>
                <Home>
                    {/* <Route exact={true} path="/" component={Main}></Route> */}
                    {/* <Route exact={true} path="/" render={()=> */}
                    <Route path="/main" render={()=>
                        <Main>
                            {/* <div>this is a sub child</div> */}
                            <Route path="/mian/a" component={About}></Route>
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        );
    }
}
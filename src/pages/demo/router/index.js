import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import A from './a'
import B from './b'
import Wrapper from './wrapper'


export default class RouterDemo extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Wrapper>
                        {/* <Route path="/a/:id" component={A} /> */}
                        <Route path="/a" component={A} />
                        <Route path="/b" component={B} />
                    </Wrapper>
                </Router>
            </div>
        );
    }
}
import React from 'react'
import { Route, Switch } from 'react-router-dom'

export default class A extends React.Component {
    render() {
        return (
            <div>
                component A
                {/* 参数：{this.props.match.params.id} */}
                <Switch>
                    <Route exact path={`${this.props.match.path}`} render={(route) => {
                        return <div>当前组件是不带参数的组件A</div>
                    } } />
                    <Route path={`${this.props.match.path}/sub`} render={(route) => {
                        return <div>当前组件Sub</div>
                    } } />
                    <Route path={`${this.props.match.path}/:id`} render={(route) => {
                        return <div>当前组件是带参数的组件A 参数是: {route.match.params.id}</div>
                    } } />
                </Switch>
            </div>
        );
    }
}
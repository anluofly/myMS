import React from 'react'
import { Link } from 'react-router-dom'

export default class Wrapper extends React.Component {
    render() {
        return (
            <div>
                <Link to="/a">组件A</Link>
                <br/>
                <Link to="/a/123">带参数的组件A</Link>
                <br/>
                <Link to="/a/sub">Sub</Link>
                <br/>
                <Link to="/b">组件B</Link>
                {this.props.children}
            </div>
        );
    }
}
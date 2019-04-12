import React from 'react'
import Child from './Child'
import {Button} from 'antd' // Button只是其中的一种组件 进行解构
import './index.less'
// import 'antd/dist/antd.css' // 按照按需加载

export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    // state = {
    //     count: 0
    // };
    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        // var style = {
        //     padding: 50
        // };
        // return <div style={style}>
        return <div className="content">
            <p>React生命周期周期</p>
            <Button onClick={this.handleAdd}>antd点击一下</Button>
            <button onClick={this.handleAdd}>点击一下</button>
            {/* this指代组件的实例 */}
            <button onClick={this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            {/* <Child name="Jack"></Child> */}
            <Child name={this.state.count}></Child>
        </div>
    }
}
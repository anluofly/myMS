import React from 'react';
import SplitPane  from 'react-split-pane'

import './index.css'

export default class FormLogin extends React.Component {
    dragStartedHandle = () => {
        console.log(12222);
    }
    dragFinishedHandle = () => {
        console.log(3333);
    }
    render() {
        return(
            <div>
                <SplitPane split="vertical" 
                    onDragStarted={this.dragStartedHandle}
                    onDragFinished={this.dragFinishedHandle}
                    minSize={50} defaultSize={100}>
                    <div className="left" >box1</div>
                    <div className="right">box2</div>
                </SplitPane>
                <br/>
                <hr/>
                <SplitPane split="vertical" minSize={50}>
                    <div></div>
                    <SplitPane split="horizontal">
                        <div className="left">left</div>
                        <div className="right">right</div>
                    </SplitPane>
                </SplitPane>
            </div>
        )
    }
}
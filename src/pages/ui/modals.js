import React from 'react';
import {Card, Button, Modal} from 'antd'
import './ui.less';

export default class Modals extends React.Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    };
    openHandle = (type) => {
        this.setState({
            [type]: true
        });
    }
    handelConfirm = (type) => {
        // Modal.confirm
        // Modal['confirm']
        // var obj = {
        //     confirm: function() {
        //         console.log(111);
        //     }
        // }
        // obj['confirm'];

        Modal[type]({
            title: '确认？',
            content: '你确定学会了？',
            onOk() {
                console.log('ok');
            },
            onCancel() {
                console.log('Cancel');
            }
        });
    }
    render() {
        return(
            <div>
                <Card title='基础模态框' className="card-wrap">
                    <Button type="primary" onClick={() => this.openHandle('showModal1')}>open</Button>
                    <Button type="primary" onClick={() => this.openHandle('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.openHandle('showModal3')}>顶部20px弹窗</Button>
                    <Button type="primary" onClick={() => this.openHandle('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title='信息确认框' className="card-wrap">
                    <Button type="primary" onClick={() => this.handelConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handelConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handelConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handelConfirm('warning')}>Warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={() => {
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>认真学习react</p>
                </Modal>
                <Modal
                    title="React"
                    okText="好的"
                    cancelText="算了"
                    visible={this.state.showModal2}
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>认真学习react</p>
                </Modal>
                <Modal
                    title="React"
                    style={{top: 20}}
                    visible={this.state.showModal3}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>认真学习react</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>认真学习react</p>
                </Modal>
            </div>
        );
    }
}
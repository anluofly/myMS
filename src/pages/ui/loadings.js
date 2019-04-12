import React from 'react';
import {Card, Spin, Icon, Alert} from 'antd'
import './ui.less';

export default class Loadings extends React.Component {
    render() {
        // const icon = <Icon type="plus" style={{fontSize: 24}} />
        const iconLoading = <Icon type="loading" style={{fontSize: 24}} />
        return(
            <div>
                <Card title="Span的用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin style={{margin: '0 10px'}} />
                    <Spin size="large" />
                    <Spin spinning={true} indicator={iconLoading} style={{marginLeft: 10}} />
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                   <Alert
                        message="React"
                        description="欢迎来到react学习课程"
                        type="info"
                   ></Alert>
                   <Spin>
                        <Alert
                            message="React"
                            description="欢迎来到react学习课程"
                            type="warning"
                        ></Alert>
                   </Spin>
                   <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到react学习课程"
                            type="warning"
                        ></Alert>
                   </Spin>
                </Card>
            </div>
        );
    };
}
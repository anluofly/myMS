import React from 'react'
import axios from './../../axios/index'
import { Card, Table, Badge, Button, Modal, message } from 'antd'

export default class BasicTable extends React.Component {
    state = {
        dataSource: []
    };
    params = {
        page: 1
    };
    componentDidMount() {
        this.request();
    }
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder: sorter.order
        })
    }
    // 动态获取mock数据
    request = () => {
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: this.params.page
                },
                isShowLoading: false
            }
        }).then((res) => {
            if(res.code === 0) {
                this.setState({
                    dataSource: res.result.list
                })
            }
        });
    };

     // 删除操作
     handleDelete = (item)=>{
        // let id = item.id;
        Modal.confirm({
            title:'确认',
            content:'您确认要删除此条数据吗？',
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    }

    
    render() {
        const columns = [
            {
                title:'id',
                key:'id',
                width: 80,
                dataIndex:'id'
            },
            {
                title: '用户名',
                key: 'userName',
                width: 80,
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config  = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                width: 80,
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                width: 80,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 80,
                key: 'time',
                dataIndex: 'time'
            }
        ];
       
        const columns2 = [
            {
                title:'id',
                key:'id',
                width: 80,
                fixed: 'left',
                dataIndex:'id'
            },
            {
                title: '用户名',
                key: 'userName',
                width: 80,
                fixed: 'left',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config  = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                width: 80,
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                width: 80,
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                key: 'aaww',
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                key: 'xff',
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                key: 'aaa',
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                key: 'ee',
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                key: 'address1111',
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                key: 'address111',
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                key: 'address11',
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                key: 'address1',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 80,
                key: 'time',
                fixed: 'right',
                dataIndex: 'time'
            }
        ];
        const columns3 = [
            {
                title:'id',
                key:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age',
                sorter:(a,b)=>{
                    return a.age - b.age;
                },
                sortOrder:this.state.sortOrder
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config  = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ];
        const columns4 = [
            {
                title:'id',
                key:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age'
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config  = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': <Badge status="success" text="游泳" />,
                        '2': <Badge status="error" text="打篮球" />,
                        '3': <Badge status="default" text="踢足球" />,
                        '4': <Badge status="processing" text="跑步" />,
                        '5': <Badge status="warning" text="爬山" />,
                        '6': <Badge status="success" text="骑行" />,
                        '7': <Badge status="success" text="桌球" />,
                        '8': <Badge status="success" text="麦霸" />
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            },
            {
                title: '操作',
                render: (text, item) => {
                    return <Button size="small" onClick={(item) => {this.handleDelete(item)} }>删除</Button>
                }
            }
        ];
       
        return(
          <div>
                <Card title="表头固定" className="card-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y: 200}}
                    />
                </Card>
                <Card title="左侧固定" className="card-wrap">
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x: 1620}}
                    />
                </Card>
                <Card title="排序" className="card-wrap">
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        onChange={this.handleChange}
                        pagination={false}
                    />
                </Card>
                <Card title="Badge" className="card-wrap">
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        );
    }
} 
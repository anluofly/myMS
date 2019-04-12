import React from 'react'
import axios from './../../axios/index'
import { Card, Table, Button, Modal, message } from 'antd'
import Utils from '../../utils/utils';
// import Item from 'antd/lib/list/Item';

export default class BasicTable extends React.Component {
    state = {
        dataSource2: []
    };
    params = {
        page: 1
    };
    componentDidMount() {
        const data = [
            {
                id:'0',
                key:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            },
            {
                id: '1',
                key: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                key: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
        ];
        // data.map((item, index) => {
        //     Item.key = index;
        // });
        this.setState({
            dataSource: data
        });
        this.request();
    }
    // 动态获取mock数据
    request = () => {
        // let baseUrl = 'https://www.easy-mock.com/mock/5ca5a1307296342b5e1e2c6e/mockapi';
        // axios.get(baseUrl+ '/table/list').then((res) => {
        //     // console.log(JSON.stringify(res));
        //     if (res.status === 200 && res.data.code === 0) {
        //         this.setState({
        //             dataSource2: res.data.result.list
        //         })
        //     }
        // })
        const _this = this;
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.params.page
                },
                isShowLoading: false
            }
        }).then((res) => {
            if(res.code === 0) {
                // res.result.list.map((item, index) => {
                //     Item.key = index;
                // });
                this.setState({
                    dataSource2: res.result.list,
                    selectedRowKeys: [], // 删除之后，置空处理
                    selectedRows: null, // 删除之后，置空处理
                    pagination: Utils.pagination(res, (current) => {
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        });
    };
    onRowClick = (record, index) => {
        let selectKey = [index];
        Modal.info({
            titel: '信息',
            content: `用户名${record.userName}`
        });
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        });
    }
    // 多选执行删除动作
    handleDelete = (()=>{
        let rows = this.state.selectedRows;
        let ids = [];
        // eslint-disable-next-line array-callback-return
        rows.map((item) => {
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content: `您确定要删除这些数据吗？${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    })
    
    render() {
        const columns = [
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
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        };
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                // let ids = [];
                // selectedRows.map((item) => {
                //     ids.push(item.id);
                // });
                this.setState({
                    selectedRowKeys,
                    selectedRows
                    // selectedIds: ids
                });
            }
        };
        return(
          <div>
                <Card title="基础表格" className="card-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格-Mock" className="card-wrap">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="单选-mock" className="card-wrap">
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        onRow={(record, index) => {
                            return {
                              onClick: () => {
                                  this.onRowClick(record, index);
                              }
                            };
                          }}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="复选-mock" className="card-wrap">
                    <div style={{marginBottom:10}}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="分页-mock" className="card-wrap">
                    <div style={{marginBottom:10}}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        );
    }
} 
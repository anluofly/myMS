import React from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { switchMenu } from './../../redux/action'
import MenuConfig from './../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
    state = {
        currentKey: ''
    };
    componentWillMount() {
       let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
       const menuTreeNode = this.renderMenu(MenuConfig);
       this.setState({
        menuTreeNode,
        currentKey
       })
    }
    handleClick = ({item, key}) => {
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title));
        this.setState({
            // currentKey: item.key
            currentKey: key
        })
    }
    // 菜单渲染 递归实现
    renderMenu = (data) => {
        return data.map((item) => {
           if (item.children) {
                return(
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    {/* public 不会再服务器端部署的 */}
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>my MS</h1>
                </div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={ [this.state.currentKey] }
                    theme="dark"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}


export default connect()(NavLeft);
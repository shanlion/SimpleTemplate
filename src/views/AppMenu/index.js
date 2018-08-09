import React from 'react';

import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;

class AppMenu extends React.Component {
    constructor(props) {
        super(props);

        this.onMenuClick = this.onMenuClick.bind(this);
        // this.onMenuOpenChange = this.onMenuOpenChange.bind(this);
    }

    /**
     * @description 点击 MenuItem 调用此函数
     */
    onMenuClick(item) {
        // console.log(item, 'IKK');
        // console.log(this.props, 'TPTP');
        const {match, history} = this.props;
        history.push(`${match.url}/${item.key}`)
    }

    /**
     * @description SubMenu 展开/关闭的回调
     */
    // onMenuOpenChange(openKeys) {
    //     console.log(openKeys, 'OOO');
    // }

    render() {

        const splitPathname = this.props.location.pathname.replace('/', '').split('/');
        const selectedKeys = [splitPathname[1]];
        let openKeys = [];
        switch (selectedKeys[0]) {
            case 'tom':
            case 'bill':
            case 'alex':
                openKeys = ['user'];
                break;
            case 'team1':
            case 'team2':
                openKeys = ['team'];
                break;
            default:
                break;
        }

        return (
            <Menu
                defaultOpenKeys={openKeys}
                selectedKeys={selectedKeys}
                onClick={this.onMenuClick}
                onOpenChange={this.onMenuOpenChange}
                theme="dark"
                mode="inline"
            >
                <Menu.Item key="option1">
                    <Icon type="pie-chart"/>
                    <span>Option 1</span>
                </Menu.Item>

                <Menu.Item key="option2">
                    <Icon type="desktop"/>
                    <span>Option 2</span>
                </Menu.Item>

                <SubMenu
                    key="user"
                    title={<span><Icon type="user"/><span>User</span></span>}
                >
                    <Menu.Item key="tom">Tom</Menu.Item>
                    <Menu.Item key="bill">Bill</Menu.Item>
                    <Menu.Item key="alex">Alex</Menu.Item>
                </SubMenu>

                <SubMenu
                    key="team"
                    title={<span><Icon type="team"/><span>Team</span></span>}
                >
                    <Menu.Item key="team1">Team 1</Menu.Item>
                    <Menu.Item key="team2">Team 2</Menu.Item>
                </SubMenu>

                <Menu.Item key="file">
                    <Icon type="file"/>
                    <span>File</span>
                </Menu.Item>
            </Menu>
        );
    }
}

export default AppMenu;

import React from 'react'
import PYLogo from 'common/img/PYLogo.png'
import {history} from 'umi'
import IconMap from '../IconMap'
import { Link } from 'umi'

const SideBar = ({Sider, Menu, collapse}) => {
    const pathName = history.location.pathname;
    let routeList = sessionStorage.getItem('routeList');
    routeList = !(routeList === null || routeList === "undefined") ? JSON.parse(routeList) : [];
    
    const menuItems = routeList?.map(item => ({
        key: item.route,
        icon: IconMap[item.icon],
        label: item.zhName,
        onClick:()=> history.push(item.route)
    }))
    return (
        <Sider theme="light" className="side-bar">
            <div className="brand">
                <div className="logo">
                    <img src={PYLogo} alt="" />
                    { !collapse ?<h1>鹏乙人事系统</h1>: "" }
                </div>
            </div>
            <div className="menu-container">
                <Menu mode="inline" selectedKeys= {pathName} items={menuItems}>
                    {/* {routeList?.map(item => {
                        return (
                            <Menu.Item key={item.route}>
                                <Link to={item.route}>
                                {IconMap[item.icon]}
                                <span>{item.zhName}</span>
                                </Link>
                            </Menu.Item>
                        )
                    })} */}
                </Menu>
            </div>
        </Sider>
    )
}

export default SideBar
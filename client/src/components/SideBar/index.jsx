import React from 'react'
import PYLogo from 'common/img/PYLogo.png'
import {history} from 'umi'
import IconMap from '../IconMap'
import { Link } from 'umi'

const SideBar = ({ Sider, Menu }) => {
    const pathName = history.location.pathname;
    const routeList = sessionStorage.getItem('routeList') ? JSON.parse(sessionStorage.getItem('routeList')) : [];
    console.log(routeList)
    return (
        <Sider theme="light" className="side-bar">
            <div className="brand">
                <div className="logo">
                    <img src={PYLogo} alt="" />
                    <h1>鹏乙人事系统</h1>
                </div>
            </div>
            <div className="menu-container">
                <Menu mode="inline" selecttedKey= {pathName}>
                    {routeList?.map(item => {
                        return (
                            <Menu.Item key={item.route}>
                                <Link to={item.route}>
                                {IconMap[item.icon]}
                                <span>{item.zhName}</span>
                                </Link>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </div>
        </Sider>
    )
}

export default SideBar
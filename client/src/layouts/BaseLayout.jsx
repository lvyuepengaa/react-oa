import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import SideBar from '../components/SideBar'
import './BaseLayout.less'
import CommonHeader from 'components/CommonHeader'
import { history } from 'umi'
import NotFoundPage from '../pages/404Page'

const BaseLayout = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  const { location } = history;
    let routeList = sessionStorage.getItem('routeList');
    routeList = !(routeList === null || routeList === "undefined") ? JSON.parse(routeList) : [];
  // 判断当前路径是不是在根域下，是的话直接跳转到路由对象的首页，如果是一个错误的页面，会返回404
  const isIncludesPage = () => {
    if (location.pathname === '/') {
      history.replace(routeList[0].route);
      return false;
    }
    return routeList.some(item => item.route === location.pathname);
  }

  const changeCollapse = () => setCollapse(!collapse);
  return (
    <Layout className="container">
      <SideBar Sider={Sider} Menu={Menu} collapse={collapse} />
      <Layout>
        <CommonHeader Header={Header} collapse={collapse} changeCollapse={changeCollapse} />
        <Content>{isIncludesPage() ? children : <NotFoundPage/>} </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;


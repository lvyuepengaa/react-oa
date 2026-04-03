import React from 'react'
import IconMap from '../IconMap'
import { Avatar, Menu } from 'antd'
import defaultAvatarIcon from 'common/img/default_avatar.png';
import { useSelector,  } from 'umi'
const { SubMenu, Divider, Item } = Menu;


const CommonHeader = ({ Header, collapse, changeCollapse }) => {
  const {userInfo} = useSelector(state => state.user);
  const MenuTitle = (
    <>
    <span>{userInfo.userName}</span>
      <Avatar
        style={{ marginLeft: 0 }}
        src={userInfo.avatar || defaultAvatarIcon}
      />
    </>
  )
  const signOut = () => {
    sessionStorage.clear()
    window.location.href = '/users/login';
  }
  return (
    <Header className="header-wrapper">
      <div className="button" onClick={changeCollapse}>
        {collapse ? IconMap.rightArrow : IconMap.leftArrow}
      </div>
      <Menu mode="horizontal">
        {/* // key={['1']}表示一级菜单 key={'1'} 表示第一项 key={['1'， '3']}表示第一级的第三项*/}
        <SubMenu key={['1']} title={MenuTitle}>
        <Divider/>
        <Item key={"4"} icon={IconMap.signOut} onClick={signOut}>
          <span>退出</span>
        </Item>
        </SubMenu>
      </Menu>
    </Header>
  )
}

export default CommonHeader
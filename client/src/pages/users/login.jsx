import React, { useState } from 'react'
import AccountLogin from './component/AccountLogin'
import SmCodeLogin from './component/SmCodeLogin'
import { Button, Form, Input, Row, Col } from 'antd';
import IconMap from 'components/IconMap';
import logoImg from 'common/img/logo.svg'
import "./css/login.less"
import { useDispatch, useSelector } from 'umi';


const FormItem = Form.Item;

const login = () => {
  const [type, setType] = useState(0);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);


  const submitUserInfo = (data) => {
    dispatch({type: 'user/login', payload: {...data, type}})
  }

  const ComponentSelector = (props) => !type ? <AccountLogin {...props}/> : <SmCodeLogin  {...props}/>;
  const [form] = Form.useForm();
  return (
    <div className='form'>
      <div className="logo">
        <img src={logoImg} alt=''></img>
        <span>鹏乙人事管理系统</span>
      </div>
      <Form form={form} onFinish={submitUserInfo}>
        {ComponentSelector({ form, FormItem, Input })}
        <Row>
          <Button type='primary' htmlType="submit" loading={loading.effects['user/login']}>登录</Button>
        </Row>
        <Row className="ft-12">
          <Col span={6}>忘记密码？</Col>
          <Col span={18} className="align-right" onClick={() => setType(!type? 1 : 0)}>
          {!type ? "使用手机号码进行登录" : "使用账户名密码进行登录" }
          {IconMap.arrRowRight}
          </Col>
          {/* <Button type='primary'>登录</Button> */}
        </Row>
      </Form>
    </div>
  )
}

export default login
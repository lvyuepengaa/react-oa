import React, { useState } from 'react'
import SmCodeLogin from './component/SmCodeLogin'
import UpdatePassward from './component/UpdatePassward';
import { Button, Form, Input, Row, Col, message } from 'antd';
import IconMap from 'components/IconMap';
import logoImg from 'common/img/logo.svg'
import "./css/login.less"
import { useSelector } from 'umi';
import $http from 'api'


const FormItem = Form.Item;

const forgetPassword = ({ history }) => {
  const [currentStep, setCurrentStep] = useState(1); // 当前组件的标识
  const loading = useSelector(state => state.loading);

  // 用户点击处理
  const submitSelect = async data => {
    currentStep === 1 ? _checkCode(data.code) : _updatePassword(data.confirmPassword)
  }
  // 验证码检证
  const _checkCode = async (smCode) => {
    const { data, msg } = await $http.checkSmCode({smCode});
    if (data) {
      // 切换组件标识   变成UpdatePassward
      setCurrentStep(0);
    } else {
      message.error(msg);
    }
  }
  // 密码更新
  const _updatePassword = async (newPassword) => {
    const { data, msg } = await $http.resetPassword({newPassword});
    if (data) {
      // 切换组件标识   变成UpdatePassward
      message.success(msg);
      history.replace('/users/login')
    } else {
      message.error(msg);
    }
  }

  const ComponentSelector = (props) => currentStep === 1 ? <SmCodeLogin {...props} /> : <UpdatePassward  {...props} />;
  const [form] = Form.useForm();
  return (
    <div className='form forget-Password'>
      <div className="forget-password-title">
        {currentStep === 1 ? '忘记密码' : '重置密码'}
      </div>
      <Form form={form} onFinish={submitSelect}>
        {ComponentSelector({ form, FormItem, Input })}
        <Row>
          <Button
            type='primary'
            htmlType="submit"
            loading={loading.effects['user/login']}>
            {currentStep === 1 ? '下一步' : '确认'}
          </Button>
        </Row>
        {/* <Row className="ft-12">
          <Col span={6}>忘记密码？</Col>
          <Col span={18} className="align-right" onClick={() => setType(!type ? 1 : 0)}>
            {!type ? "使用手机号码进行登录" : "使用账户名密码进行登录"}
            {IconMap.arrRowRight}
          </Col>
          <Button type='primary'>登录</Button>
        </Row> */}
      </Form>
    </div>
  )
}

export default forgetPassword
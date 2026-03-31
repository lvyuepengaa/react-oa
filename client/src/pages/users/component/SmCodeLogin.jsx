import React, { useState } from 'react'
import IconMap from 'components/IconMap'
import { Button } from 'antd';
import { loginRule } from 'utils/rules';

const SmCodeLogin = ({ Input, FormItem, form }) => {
    const [disabled, setDisabled] = useState(true);
    let [currenTime, setCurrentTime] = useState(3);
    let [currenTimeStatus, setCurrentTimeStatus] = useState(true);
    let [currenStatus, setCurrentStatus] = useState(true);

    const _sendSmCode = () => {
        setCurrentTimeStatus(false);
        setDisabled(true);
        runTime();
    }
    const runTime = () => {
        const timer = setInterval(() => {
            setCurrentStatus(false);
            if (currenTime === 0) {
                clearInterval(timer)
                setCurrentTimeStatus(true);
                setDisabled(false);
                setCurrentTime(3);
                setCurrentStatus(true);
                return;
            }
            setCurrentTime(currenTime--);
        }, 1000)
    }
    const checkedMobile = async (e) => {
        try {
            // 如果输入的手机号码不符合规则  会抛出异常被catch捕获
            const status = await form.validateFields(['mobile'])
            setDisabled(false);
        } catch (error) {
            setDisabled(true);
        }
    }
    return (
        <>
            <FormItem name="mobile" rules={loginRule.mobileRule} hasFeedback>
                <Input placeholder="请输入手机号码" prefix={IconMap.mobileIcon} onChange={checkedMobile} />
            </FormItem>
            <FormItem name="code" rules={loginRule.smCodeRule} hasFeedback>
                <Input
                    placeholder="请输入验证码"
                    prefix={IconMap.codeIcon}
                    addonAfter={<Button
                        disabled={disabled}
                        onClick={_sendSmCode}
                    >{currenTimeStatus ? "发送验证码" : currenStatus ? "正在获取验证码" : `${currenTime}秒后重新发送`}</Button>}
                    type="password"
                />
            </FormItem>
        </>
    )
}

export default SmCodeLogin
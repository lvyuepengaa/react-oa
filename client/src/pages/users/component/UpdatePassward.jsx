import React from 'react'
import IconMap from 'components/IconMap'
import { loginRule } from 'utils/rules'

const AccountLogin = ({ Input, FormItem, form }) => {
    return (
        <>
            <FormItem name="password" rules={loginRule.passwordRule} hasFeedback>
                <Input placeholder="新的登录密码" type="password" prefix={IconMap.passwordIcon} />
            </FormItem>
            <FormItem name ="confirmPassword" rules={loginRule.confirmPasswordRule(form)} hasFeedback>
                <Input placeholder="确认新的登录密码" type="password" prefix={IconMap.passwordIcon}/>
            </FormItem>
        </>
    )
}

export default AccountLogin
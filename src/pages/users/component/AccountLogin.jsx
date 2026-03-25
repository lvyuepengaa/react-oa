import React from 'react'
import IconMap from 'components/IconMap'
import { loginRule } from 'utils/rules'
console.log(loginRule)

const AccountLogin = ({ Input, FormItem }) => {
    return (
        <>
            <FormItem name="accountName" rules={loginRule.userRule}>
                <Input placeholder="请输入用户名" prefix={IconMap.userIcon} />
            </FormItem>
            <FormItem name ="password" rules={loginRule.passwordRule}>
                <Input placeholder="请输入密码" prefix={IconMap.passwordIcon}/>
            </FormItem>
        </>
    )
}

export default AccountLogin
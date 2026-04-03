import ajax from '../http.js'

export const userLogin = (params) => ajax.post('/login', params);

export const getSmCode = (params) => ajax.get('/getSmCode', params)

export const checkSmCode = (params) => ajax.get('/checkSmCode', params)

export const resetPassword = (params) => ajax.post('/resetPassword', params)

// 检测用户是否登录
export const queryUserLogin = (params) => ajax.get('/queryLoginStatus', params)
//- 获取路由表
export const getRouteList = () => ajax.get('//getRouteList');
import ajax from '../http'

export const userLogin = (params) => ajax.post('/login', params);

export const getCode = (params) => ajax.get('/getCode', params)

export const checkSmCode = (params) => ajax.get('/checkSmCode', params)

export const resetPassword = (params) => ajax.get('/resetPassword', params)
import ajax from '../http'

export const userLogin = (params) => ajax.post('/login', params);

export const getSmCode = (params) => ajax.get('/getSmCode', params)

export const checkSmCode = (params) => ajax.get('/checkSmCode', params)

export const resetPassword = (params) => ajax.post('/resetPassword', params)
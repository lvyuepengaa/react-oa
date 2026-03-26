import ajax from '../http'

export const userLogin = (params) => ajax.post('/login', params);
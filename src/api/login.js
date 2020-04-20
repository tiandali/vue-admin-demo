import request from '@/utils/request'
import axios from 'axios'

export function loginByUsername(username, password, code, token, key) {
  const data = {
    username,
    password,
    code,
    token,
    key
  }
  // 登录
  // return request({
  //   url: '/mock/api/v3/login',
  //   // url: '/login',
  //   method: 'post',
  //   params: data
  // })
  return axios.post('/mock/api/v3/login', {
    ...data
  })
  // .then(function (response) {
  //   console.log('11111', response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
}

// 登出
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function getUserInfo() {
  // return request({
  //   url: '/info',
  //   method: 'get'
  // })
  return axios.get('/mock/api/v3/userInfo')
}

export function getImgCode() {
  return request({
    url: '/auth/captcha.jpg',
    method: 'get'
  })
}

// 根据手机
export function loginByUserPhone(phone, smsCode) {
  const data = {
    phone,
    smsCode
  }
  // 登录
  return request({
    url: '/mobile/login',
    method: 'post',
    params: data
  })
}


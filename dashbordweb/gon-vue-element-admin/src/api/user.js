import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function getDashboradHome() {
  return request({
    url: '/uptickevmapi/dashborad/home',
    method: 'post'
  })
}

export function getLoopringInfo() {
  // http://192.168.1.113:7091/statistics/getLoopringInfo
  // https://loopring.upticknft.com/uptickapi/statistics/getLoopringInfo
  return request({
    url: 'https://loopring.upticknft.com/uptickapi/statistics/getLoopringInfo',
    method: 'post'
  })
}
export function getIrisInfo() {
  // http://192.168.1.113:7091/statistics/getLoopringInfo
  return request({
    url: 'https://www.upticknft.com/uptickapi1/statistics/getIrisInfo',
    method: 'post'
  })
}

export function getOPBInfo() {
  // http://192.168.1.113:7091/statistics/getLoopringInfo
  return request({
    url: 'https://service-irita.starrymedia.com/api/1.0/statistics/getMokaInfo',
    method: 'post'
  })
}

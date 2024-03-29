import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function getDashboradHome() {
  return request({
    url: '/serviceapi/dashborad/home',
    method: 'post'
  })
}

export function getNftList(params) {
  debugger
  return request({
    url: '/serviceapi/dashborad/nftList',
    method: 'post',
    params: params
  })
}


export function getAccountList(params) {
  return request({
    url: '/serviceapi/dashborad/accountList',
    method: 'post',
    params: params
  })
}

export function getIBCTransactionList(params) {
  return request({
    url: '/serviceapi/dashborad/ibcTransactionList',
    method: 'post',
    params: params
  })
}

// export function getIBCTransactionList(params) {
//   return request({
//     url: '/serviceapi/dashborad/ibcTransactionList',
//     method: 'post',
//     params: params
//   })
// }

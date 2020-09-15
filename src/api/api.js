import request from '@/utils/request'

export function getRequest(query) {
  return request({
    url: '/',
    method: 'get',
    params: query
  })
}
import request from '@/utils/request'

export function getGoodsOwner(params) {
  return request({
    url: '/api/owner/page',
    method: 'get',
    params
  })
}

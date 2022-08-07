import request from '@/utils/request'
export const getAreaList = function (params) {
  return request({
    url: '/api/area/pageDetail',
    params
  })
}

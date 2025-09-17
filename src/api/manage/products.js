import request from '@/utils/request'

// 查询产品管理列表
export function listProducts(query) {
  return request({
    url: '/manage/products/list',
    method: 'get',
    params: query
  })
}

// 查询产品管理详细
export function getProducts(productId) {
  return request({
    url: '/manage/products/' + productId,
    method: 'get'
  })
}

// 新增产品管理
export function addProducts(data) {
  return request({
    url: '/manage/products',
    method: 'post',
    data: data
  })
}

// 修改产品管理
export function updateProducts(data) {
  return request({
    url: '/manage/products',
    method: 'put',
    data: data
  })
}

// 删除产品管理
export function delProducts(productId) {
  return request({
    url: '/manage/products/' + productId,
    method: 'delete'
  })
}

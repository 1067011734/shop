
/**
 * 通过节点查询结果 支付宝和微信兼容
 * @param {object} query
 */
const getDomByQuery= (query) => {
  return new Promise((res)=>{
    // 支付宝小程序
    if( process.env.TARO_ENV === 'alipay'){
      query.boundingClientRect().exec((ret) => {
        ret.length &&  res(ret[ret.length-1])
      })
      return
    }

    // 微信小程序
    query.boundingClientRect((rects) => {
      res(rects)
    }).exec()
  })
}


export default {
  getDomByQuery
}


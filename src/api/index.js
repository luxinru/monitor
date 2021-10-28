const axios = require('axios')
const ip = 'http://0.0.0.0:8080'

// Comprehensive index

/**
 * 获取综合指标
 */
async function fetchComprehensive (data) {
  try {
    const response = axios({
      method: 'post',
      url: `${ip}/comprehensive`,
      data: data
    })
    return response
  } catch (error) {
    return error
  }
}

export {
  fetchComprehensive
}

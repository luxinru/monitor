const axios = require('axios')
const ip = 'http://0.0.0.0:8080'

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

/**
 * 获取部门访问排行
 */
async function fetchDepartmentVisitRanking (data) {
  try {
    const response = axios({
      method: 'post',
      url: `${ip}/DepartmentVisitRanking`,
      data: data
    })
    return response
  } catch (error) {
    return error
  }
}

/**
 * 获取部门访问排行
 */
async function fetchDepartmentProvidesRanking (data) {
  try {
    const response = axios({
      method: 'post',
      url: `${ip}/DepartmentProvidesRanking`,
      data: data
    })
    return response
  } catch (error) {
    return error
  }
}

/**
 * 获取应用调用排行
 */
async function fetchApplicationCallRanking (data) {
  try {
    const response = axios({
      method: 'post',
      url: `${ip}/ApplicationCallRanking`,
      data: data
    })
    return response
  } catch (error) {
    return error
  }
}

/**
 * 获取热度排行
 */
async function fetchPopularityRanking (data) {
  try {
    const response = axios({
      method: 'post',
      url: `${ip}/PopularityRanking`,
      data: data
    })
    return response
  } catch (error) {
    return error
  }
}

/**
 * 获取实时日志滚动信息排行
 */
async function fetchLogs1 (data) {
  try {
    const response = axios({
      method: 'post',
      url: `${ip}/Logs1`,
      data: data
    })
    return response
  } catch (error) {
    return error
  }
}

/**
 * 获取接口波测滚动信息排行
 */
async function fetchLogs2 (data) {
  try {
    const response = axios({
      method: 'post',
      url: `${ip}/Logs2`,
      data: data
    })
    return response
  } catch (error) {
    return error
  }
}
/**
 * 获取接口预警滚动信息排行
 */
async function fetchLogs3 (data) {
  try {
    const response = axios({
      method: 'post',
      url: `${ip}/Logs3`,
      data: data
    })
    return response
  } catch (error) {
    return error
  }
}

/**
 * 获取服务健康概况信息接口
 */
async function fetchServiceHealthProfile (data) {
  try {
    const response = axios({
      method: 'post',
      url: `${ip}/ServiceHealthProfile`,
      data: data
    })
    return response
  } catch (error) {
    return error
  }
}

export {
  fetchComprehensive,
  fetchDepartmentVisitRanking,
  fetchDepartmentProvidesRanking,
  fetchApplicationCallRanking,
  fetchPopularityRanking,
  fetchLogs1,
  fetchLogs2,
  fetchLogs3,
  fetchServiceHealthProfile
}

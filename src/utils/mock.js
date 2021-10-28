import Mock from 'mockjs'

export default Mock.mock('http://0.0.0.0:8080/comprehensive', 'post', {
  responseId: '', // 字符 响应的唯一标识
  result: '', // 整形 结果码，1、0     1为成功，0为失败
  time: '', // 长整形 返回结果的时间点信息 单位为毫秒
  datas: {
    total_statistics: {
      dept_num: Mock.Random.integer(1, 99999), // 部门数 单位为个
      app_num: Mock.Random.integer(1, 99999), // 应用数 单位为个
      srv_num: Mock.Random.integer(1, 99999), // 服务数 单位为个
      total_access: Mock.Random.integer(1, 99999), // 调用总数 单位为次
      success_access: Mock.Random.integer(1, 99999), // 成功调用数 单位为次
      failed_access: Mock.Random.integer(1, 99999), // 失败调用数 单位为次
      illegal_access: Mock.Random.integer(1, 99999), // 非法调用数 单位为次
      avg_times: Mock.Random.integer(1, 999) // 平均响应时间 单位时毫秒
    }, // 整体统计指标
    today_statistics: {
      dept_num: Mock.Random.integer(1, 99999), // 部门数 单位为个
      app_num: Mock.Random.integer(1, 99999), // 应用数 单位为个
      srv_num: Mock.Random.integer(1, 99999), // 服务数 单位为个
      total_access: Mock.Random.integer(1, 99999), // 调用总数 单位为次
      success_access: Mock.Random.integer(1, 99999), // 成功调用数 单位为次
      failed_access: Mock.Random.integer(1, 99999), // 失败调用数 单位为次
      illegal_access: Mock.Random.integer(1, 99999), // 非法调用数 单位为次
      avg_times: Mock.Random.integer(1, 999) // 平均响应时间 单位时毫秒
    } // 当天整体指标

  } // 返回的结果体
})

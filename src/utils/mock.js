import Mock from 'mockjs'

Mock.mock('http://0.0.0.0:8080/comprehensive', 'post', {
  responseId: '', // 字符 响应的唯一标识
  result: '', // 整形 结果码，1、0     1为成功，0为失败
  time: '', // 长整形 返回结果的时间点信息 单位为毫秒
  datas: {
    total_statistics: {
      dept_num: '@natural(1, 99999)', // 部门数 单位为个
      app_num: '@natural(1, 99999)', // 应用数 单位为个
      srv_num: '@natural(1, 99999)', // 服务数 单位为个
      total_access: '@natural(1, 99999)', // 调用总数 单位为次
      success_access: '@natural(1, 99999)', // 成功调用数 单位为次
      failed_access: '@natural(1, 99999)', // 失败调用数 单位为次
      illegal_access: '@natural(1, 99999)', // 非法调用数 单位为次
      avg_times: '@natural(1, 999)' // 平均响应时间 单位时毫秒
    }, // 整体统计指标
    today_statistics: {
      dept_num: '@natural(1, 99999)', // 部门数 单位为个
      app_num: '@natural(1, 99999)', // 应用数 单位为个
      srv_num: '@natural(1, 99999)', // 服务数 单位为个
      total_access: '@natural(1, 99999)', // 调用总数 单位为次
      success_access: '@natural(1, 99999)', // 成功调用数 单位为次
      failed_access: '@natural(1, 99999)', // 失败调用数 单位为次
      illegal_access: '@natural(1, 99999)', // 非法调用数 单位为次
      avg_times: '@natural(1, 999)' // 平均响应时间 单位时毫秒
    } // 当天整体指标

  } // 返回的结果体
})

Mock.mock('http://0.0.0.0:8080/DepartmentVisitRanking', 'post', {
  responseId: '', // 字符 响应的唯一标识
  result: '', // 整形 结果码，1、0     1为成功，0为失败
  time: '', // 长整形 返回结果的时间点信息 单位为毫秒
  'datas|1-50': [
    {
      dept_name: '@city',
      access_times: '@natural(1, 99999)'
    }
  ] // 返回的结果体
})

Mock.mock('http://0.0.0.0:8080/DepartmentProvidesRanking', 'post', {
  responseId: '', // 字符 响应的唯一标识
  result: '', // 整形 结果码，1、0     1为成功，0为失败
  time: '', // 长整形 返回结果的时间点信息 单位为毫秒
  'datas|1-50': [
    {
      dept_name: '@city',
      provide_access_times: '@natural(1, 99999)'
    }
  ] // 返回的结果体
})

Mock.mock('http://0.0.0.0:8080/ApplicationCallRanking', 'post', {
  responseId: '', // 字符 响应的唯一标识
  result: '', // 整形 结果码，1、0     1为成功，0为失败
  time: '', // 长整形 返回结果的时间点信息 单位为毫秒
  'datas|1-50': [
    {
      owner_dept_name: '@city',
      app_name: '@city',
      access_times: '@float(0, 1)'
    }
  ] // 返回的结果体
})

Mock.mock('http://0.0.0.0:8080/PopularityRanking', 'post', {
  responseId: '', // 字符 响应的唯一标识
  result: '', // 整形 结果码，1、0     1为成功，0为失败
  time: '', // 长整形 返回结果的时间点信息 单位为毫秒
  'datas|1-50': [
    {
      srv_name: '@city',
      owner_dept_name: '@city',
      be_accessed_times: '@natural(1, 99999)'
    }
  ] // 返回的结果体
})

Mock.mock('http://0.0.0.0:8080/Logs2', 'post', {
  responseId: '', // 字符 响应的唯一标识
  result: '', // 整形 结果码，1、0     1为成功，0为失败
  time: '', // 长整形 返回结果的时间点信息 单位为毫秒
  'datas|1-200': [
    {
      srv_name: '@city',
      owner_dept_name: '@city',
      check_result: '@natural(1, 2)',
      check_time: '@datetime("yyyy/MM/dd HH:mm:ss")'
    }
  ] // 返回的结果体
})

Mock.mock('http://0.0.0.0:8080/Logs3', 'post', {
  responseId: '', // 字符 响应的唯一标识
  result: '', // 整形 结果码，1、0     1为成功，0为失败
  time: '', // 长整形 返回结果的时间点信息 单位为毫秒
  'datas|1-200': [
    {
      srv_name: '@city',
      owner_dept_name: '@city',
      warning_info: '@city',
      warning_time: '@datetime("yyyy/MM/dd HH:mm:ss")'
    }
  ] // 返回的结果体
})

Mock.mock('http://0.0.0.0:8080/Logs1', 'post', {
  responseId: '', // 字符 响应的唯一标识
  result: '', // 整形 结果码，1、0     1为成功，0为失败
  time: '', // 长整形 返回结果的时间点信息 单位为毫秒
  'datas|1-200': [
    {
      srv_name: '@city',
      app_name: '@city',
      srv_owner_dept_name: '@city',
      access_result: '@natural(1, 2)',
      access_time: '@datetime("yyyy/MM/dd HH:mm:ss")'
    }
  ] // 返回的结果体
})

Mock.mock('http://0.0.0.0:8080/ServiceHealthProfile', 'post', {
  responseId: '', // 字符 响应的唯一标识
  result: '', // 整形 结果码，1、0     1为成功，0为失败
  time: '', // 长整形 返回结果的时间点信息 单位为毫秒
  datas: {
    bus_info: {
      master: {
        status: 1
      },
      backup: {
        status: 2
      }
    },
    'srv_node_info|5-26': [
      {
        node_name: '@region',
        node_code: '@city',
        status: '@natural(1, 2)',
        node_ip: '@ip',
        node_port: '@natural(1000, 9999)'
      } // 返回的结果体
    ]

  }
})

export default Mock

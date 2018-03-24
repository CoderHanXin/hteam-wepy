'use strict'

const moment = require('moment')
moment.locale('zh-cn', {
  week: {
    dow: 1 // Monday is the first day of the week.
  }
})

let util = {}

util.ltToday = t => {
  let m = moment(t)
  const today = moment(moment().format('YYYY-MM-DD'))
  const diff = m.diff(today)

  return diff < 0
}

util.lteToday = t => {
  let m = moment(t)
  const today = moment(moment().format('YYYY-MM-DD'))
  const diff = m.diff(today)

  return diff <= 0
}

util.eqToday = t => {
  let m = moment(t)
  const today = moment(moment().format('YYYY-MM-DD'))
  const diff = m.diff(today)

  return diff === 0
}

util.eqTomorrow = t => {
  let m = moment(t)
  const today = moment(
    moment()
      .add(1, 'days')
      .format('YYYY-MM-DD')
  )
  const diff = m.diff(today)

  return diff === 0
}

util.lteThisSunday = t => {
  const m = moment(t)
  const thisSunday = moment(
    moment()
      .weekday(6)
      .format('YYYY-MM-DD')
  )
  const diff = m.diff(thisSunday)
  return diff <= 0
}

util.lteNextSunday = t => {
  const m = moment(t)
  const nextSunday = moment(
    moment()
      .weekday(13)
      .format('YYYY-MM-DD')
  )
  const diff = m.diff(nextSunday)
  return diff <= 0
}

util.format = t => {
  if (!t) {
    return '无截止时间'
  }
  const m = moment(moment(t).format('YYYY-MM-DD'))
  const today = moment(moment().format('YYYY-MM-DD'))
  let diff = m.diff(today)
  if (diff === 0) {
    return '今天'
  }
  if (diff < 0 && diff >= -86400000) {
    return '昨天'
  }

  if (diff > 0 && diff <= 86400000) {
    return '明天'
  }
  const thisMonday = moment(
    moment()
      .weekday(0)
      .format('YYYY-MM-DD')
  )
  const thisSunday = moment(
    moment()
      .weekday(6)
      .format('YYYY-MM-DD')
  )
  if (m.diff(thisMonday) >= 0 && m.diff(thisSunday) <= 0) {
    switch (m.format('d')) {
      case '0':
        return '本周日'
      case '1':
        return '本周一'
      case '2':
        return '本周二'
      case '3':
        return '本周三'
      case '4':
        return '本周四'
      case '5':
        return '本周五'
      case '6':
        return '本周六'
    }
  }
  const nextMonday = moment(
    moment()
      .weekday(7)
      .format('YYYY-MM-DD')
  )
  const nextSunday = moment(
    moment()
      .weekday(13)
      .format('YYYY-MM-DD')
  )
  if (m.diff(nextMonday) >= 0 && m.diff(nextSunday) <= 0) {
    switch (m.format('d')) {
      case '0':
        return '下周日'
      case '1':
        return '下周一'
      case '2':
        return '下周二'
      case '3':
        return '下周三'
      case '4':
        return '下周四'
      case '5':
        return '下周五'
      case '6':
        return '下周六'
    }
  }
  if (m.year() === today.year()) {
    return m.format('MM-DD')
  } else {
    return m.format('YYYY-MM-DD')
  }
}

util.toIOSString = t => {
  if (t) {
    return moment(t).toISOString()
  } else {
    return moment().toISOString()
  }
}

export default util

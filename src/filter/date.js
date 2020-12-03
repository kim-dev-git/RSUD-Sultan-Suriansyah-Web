import moment from 'moment'
moment.locale('id')

export function toInputDate(value) {
  const options = 'yyyy-MM-DD'
  if(value.seconds) {
    return String(moment(value.seconds * 1000).format(options))
  } else {
    return String(moment(value).format(options))
  }
}

export function toDate(value) {
  const options = 'MMMM DD, yyyy'
  if(value.seconds) {
    return String(moment(value.seconds * 1000).format(options))
  } else {
    return String(moment(value).format(options))
  }
}
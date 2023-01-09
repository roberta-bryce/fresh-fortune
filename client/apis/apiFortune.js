import request from 'superagent'

const rootUrl = '/api/v1/fortune'

export function getFortunes() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

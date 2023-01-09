import request from 'superagent'

const rootUrl = '/api/v1/fortune'

export function getFortunes() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function addFortune(newFortune) {
  return request
    .post(rootUrl + '/add')
    .send(newFortune)
    .then((res) => res.body)
}

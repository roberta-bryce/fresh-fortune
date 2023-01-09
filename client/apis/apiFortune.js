import request from 'superagent'

const rootUrl = '/api/v1/fortune'

export function getFortunes() {
  return request.get(rootUrl).then((res) => res.body)
}

export function addFortune(newFortune) {
  return request
    .post(rootUrl + '/add')
    .send(newFortune)
    .then((res) => res.body)
}

export function delFortune(id) {
  return request.delete(rootUrl + '/' + id).then((res) => res.body)
}

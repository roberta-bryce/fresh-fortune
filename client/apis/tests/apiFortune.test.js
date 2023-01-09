import nock from 'nock'

import { getFortunes, addFortune } from '../apiFortune'

describe('getFortunes', () => {
  test('gets all fortunes from api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/fortune')
      .reply(200, [
        { id: 1, fortune: 'good news' },
        { id: 2, fortune: 'bad news' },
      ])
    return getFortunes().then((fortunes) => {
      expect(fortunes).toHaveLength(2)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('addFortune', () => {
  test('adds a new fortune to api', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/fortune/add')
      .reply(200, [{ id: 1, fortune: 'good news' }])
    return addFortune().then((fortune) => {
      expect(fortune).toHaveLength(1)
      expect(scope.isDone()).toBe(true)
    })
  })
})

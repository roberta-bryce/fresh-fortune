import nock from 'nock'

import { getFortunes } from '../apiFortune'

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

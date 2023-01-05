const request = require('supertest')
const server = require('../../server')
const db = require('../../db/dbFortune')

jest.mock('../../db/dbFortune')
jest.spyOn(console, 'error')

console.error.mockImplementation(() => {})

afterAll(() => {
  jest.restoreAllMocks()
})

describe('GET /api/v1/fortune', () => {
  test('returns all fortunes in the table', () => {
    db.getFortunes.mockReturnValue(
      Promise.resolve([['this function works'], ['and so does the test']])
    )
    return request(server)
      .get('/api/v1/fortune')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual([
          ['this function works'],
          ['and so does the test'],
        ])
      })
  })
})

describe('POST /api/v1/fortune/add', () => {
  test('adds a new fortune', () => {
    db.addFortune.mockReturnValue(Promise.resolve([4]))
    return request(server)
      .post('/api/v1/fortune/add')
      .send({ fortune: 'everything is working!' })
      .then((res) => {
        expect(res.status).toBe(200)
        expect(db.addFortune).toHaveBeenCalledWith({
          fortune: 'everything is working!',
        })
      })
  })
})

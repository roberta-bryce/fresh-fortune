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

describe('DEL /api/v1/fortune/:id', () => {
  test('deletes a fortune', () => {
    db.delFortune.mockReturnValue(Promise.resolve(1))
    return request(server)
      .delete('/api/v1/fortune/1')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(db.delFortune).toHaveBeenCalledWith(1)
      })
  })
})

describe('PUT /api/v1/fortune/update', () => {
  test('updates an existing fortune', () => {
    db.updateFortune.mockReturnValue(
      Promise.resolve({ id: 1, fortune: 'your test will work' })
    )
    return request(server)
      .put('/api/v1/fortune/update')
      .send({
        id: 1,
        fortune: 'your test will work',
      })
      .then((res) => {
        expect(res.status).toBe(200)
        expect(db.updateFortune).toHaveBeenCalled()
        console.log(res.body)
        expect(res.body.fortune).toContain('your test will work')
      })
  })
})

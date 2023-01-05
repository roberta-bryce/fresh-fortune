const { getFortunes } = require('../dbFortune')

const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('getFortunes', () => {
  test('gets all fortunes in table', () => {
    return getFortunes(testDb).then((fortune) => {
      expect(fortune).toHaveLength(3)
      expect(fortune[2].fortune).toBe('You have some news coming')
    })
  })
})

const {
  getFortunes,
  addFortune,
  delFortune,
  updateFortune,
} = require('../dbFortune')

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

describe('addFortune', () => {
  test('adds a new fortune to the table', () => {
    return addFortune({ fortune: 'your test will work' }, testDb)
      .then(() => {
        return testDb('fortune').select()
      })
      .then((fortune) => {
        expect(fortune).toHaveLength(4)
        expect(fortune[3].fortune).toBe('your test will work')
      })
  })
})

describe('delFortune', () => {
  test('deletes a fortune from the table', () => {
    return delFortune(1, testDb)
      .then(() => {
        return testDb('fortune').select()
      })
      .then((fortune) => {
        expect(fortune).toHaveLength(2)
      })
  })
})

describe('updateFortune', () => {
  test('updates the selected fortune within the table', () => {
    return updateFortune({ id: 1, fortune: 'an updated fortune' }, testDb)
      .then(() => {
        return testDb('fortune').select()
      })
      .then((fortune) => {
        expect(fortune).toHaveLength(3)
        expect(fortune[0].fortune).toBe('an updated fortune')
      })
  })
})

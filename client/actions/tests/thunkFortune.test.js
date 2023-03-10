import * as api from '../../apis/apiFortune.js'
import * as action from '../actionFortune'
import * as thunk from '../thunkFortune'

jest.mock('../../apis/apiFortune.js')

const fakeDispatch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

const mockFortune = [
  { id: 1, fortune: 'good news' },
  { id: 2, fortune: 'bad news' },
]

const mockOneFortune = [{ id: 1, fortune: 'good news' }]

api.getFortunes.mockReturnValue(Promise.resolve(mockFortune))

describe('getFortunes', () => {
  test('dispatches showLoading when pending', () => {
    const thunkFn = thunk.getFortunes()
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchLoading = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchLoading.type).toBe('SHOW_LOADING')
    })
  })
  test('dispatches getFortunes simple action', () => {
    const thunkFn = thunk.getFortunes()
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchSuccess = fakeDispatch.mock.calls[1][0]
      expect(fakeDispatchSuccess.type).toBe(action.GET_FORTUNE)
    })
  })
  test('dispatches showError when fn fails', () => {
    api.getFortunes.mockImplementation(() =>
      Promise.reject(new Error('an error happened!'))
    )
    return thunk
      .getFortunes()(fakeDispatch)
      .then(() => {
        const fakeDispatchError = fakeDispatch.mock.calls[1][0]
        expect(fakeDispatchError.type).toBe('SHOW_ERROR')
        expect(fakeDispatchError.payload).toBe('an error happened!')
      })
  })
})

describe('addFortune', () => {
  test('dispatches showLoading when pending', () => {
    api.addFortune.mockReturnValue(Promise.resolve(mockOneFortune))
    const thunkFn = thunk.addFortune()
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchLoading = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchLoading.type).toBe('SHOW_LOADING')
    })
  })
  test('dispatches addFortune simple action', () => {
    api.addFortune.mockReturnValue(Promise.resolve(mockOneFortune))
    const thunkFn = thunk.addFortune({
      fortune: 'test string',
    })
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchSuccess = fakeDispatch.mock.calls[1][0]
      expect(fakeDispatchSuccess.type).toBe(action.ADD_FORTUNE)
    })
  })
  test('dispatches showError when fn fails', () => {
    api.addFortune.mockImplementation(() =>
      Promise.reject(new Error('an error happened!'))
    )
    return thunk
      .addFortune()(fakeDispatch)
      .then(() => {
        const fakeDispatchError = fakeDispatch.mock.calls[1][0]
        expect(fakeDispatchError.type).toBe('SHOW_ERROR')
        expect(fakeDispatchError.payload).toBe('an error happened!')
      })
  })
})

describe('delFortune', () => {
  test('dispatches showLoading when pending', () => {
    api.delFortune.mockReturnValue(Promise.resolve(mockOneFortune))
    const thunkFn = thunk.delFortune()
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchLoading = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchLoading.type).toBe('SHOW_LOADING')
    })
  })
  test('dispatches delFortune simple action', () => {
    api.delFortune.mockReturnValue(Promise.resolve(mockOneFortune))
    const thunkFn = thunk.delFortune({
      id: 1,
    })
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchSuccess = fakeDispatch.mock.calls[1][0]
      expect(fakeDispatchSuccess.type).toBe(action.DEL_FORTUNE)
    })
  })
  test('dispatches showError when fn fails', () => {
    api.delFortune.mockImplementation(() =>
      Promise.reject(new Error('an error happened!'))
    )
    return thunk
      .delFortune()(fakeDispatch)
      .then(() => {
        const fakeDispatchError = fakeDispatch.mock.calls[1][0]
        expect(fakeDispatchError.type).toBe('SHOW_ERROR')
        expect(fakeDispatchError.payload).toBe('an error happened!')
      })
  })
})

describe('updateFortune', () => {
  test('dispatches showLoading when pending', () => {
    api.updateFortune.mockReturnValue(Promise.resolve(mockFortune))
    const thunkFn = thunk.updateFortune()
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchLoading = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchLoading.type).toBe('SHOW_LOADING')
    })
  })
  test('dispatches updateFortune simple action', () => {
    api.updateFortune.mockReturnValue(Promise.resolve(mockFortune))
    const thunkFn = thunk.updateFortune({
      id: 1,
      fortune: 'yeah this thunk works',
    })
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchSuccess = fakeDispatch.mock.calls[1][0]
      expect(fakeDispatchSuccess.type).toBe(action.UPD_FORTUNE)
    })
  })
  test('dispatches showError when fn fails', () => {
    api.updateFortune.mockImplementation(() =>
      Promise.reject(new Error('an error happened!'))
    )
    return thunk
      .updateFortune()(fakeDispatch)
      .then(() => {
        const fakeDispatchError = fakeDispatch.mock.calls[1][0]
        expect(fakeDispatchError.type).toBe('SHOW_ERROR')
        expect(fakeDispatchError.payload).toBe('an error happened!')
      })
  })
})

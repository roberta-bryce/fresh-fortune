import * as api from '../apis/apiFortune'
import * as action from './actionGen'
import * as actionFortune from './actionFortune'

export function getFortunes() {
  return (dispatch) => {
    dispatch(action.showLoading(true))
    return api
      .getFortunes()
      .then((fortunes) => {
        dispatch(actionFortune.getFortunes(fortunes))
      })
      .catch((err) => {
        dispatch(action.showError(err.message))
      })
      .finally(() => dispatch(action.showLoading(false)))
  }
}

export function addFortune(newFortune) {
  return (dispatch) => {
    dispatch(action.showLoading(true))
    return api
      .addFortune(newFortune)
      .then(([fortuneId]) => {
        dispatch(
          actionFortune.addFortune({
            id: fortuneId,
            fortune: newFortune.fortune,
          })
        )
      })
      .catch((err) => {
        dispatch(action.showError(err.message))
      })
      .finally(() => dispatch(action.showLoading(false)))
  }
}

export function delFortune(id) {
  return (dispatch) => {
    dispatch(action.showLoading(true))
    return api
      .delFortune(id)
      .then(() => {
        dispatch(actionFortune.delFortune(id))
      })
      .catch((err) => {
        dispatch(action.showError(err.message))
      })
      .finally(() => dispatch(action.showLoading(false)))
  }
}

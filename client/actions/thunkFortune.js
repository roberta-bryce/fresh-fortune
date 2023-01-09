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

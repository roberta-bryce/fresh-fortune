import { SHOW_LOADING, SHOW_ERROR } from '../actions/actionGen'

import {
  GET_FORTUNE,
  ADD_FORTUNE,
  DEL_FORTUNE,
  UPD_FORTUNE,
} from '../actions/actionFortune'

const initialState = {
  error: null,
  loading: false,
  fortunes: [],
}

function fortuneReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_ERROR:
      return {
        ...state,
        error: payload,
      }
    case SHOW_LOADING:
      return {
        ...state,
        loading: payload,
      }
    case GET_FORTUNE:
      return {
        ...state,
        fortunes: payload,
      }
    case ADD_FORTUNE:
      return {
        ...state,
        fortunes: [...state.fortunes, payload],
      }
    case DEL_FORTUNE:
      return {
        ...state,
        fortunes: [
          ...state.fortunes.filter((fortune) => fortune.id !== payload),
        ],
      }
    case UPD_FORTUNE:
      return {
        ...state,
        fortunes: state.fortunes.map((fortune) => {
          if (fortune.id == payload.id) {
            return payload
          } else {
            return fortune
          }
        }),
      }
    default:
      return state
  }
}

export default fortuneReducer

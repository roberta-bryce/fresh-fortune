export const GET_FORTUNE = 'GET_FORTUNE'
export const ADD_FORTUNE = 'ADD_FORTUNE'
export const DEL_FORTUNE = 'DEL_FORTUNE'
export const UPD_FORTUNE = 'UPD_FORTUNE'

export function getFortune(fortunes) {
  return {
    type: GET_FORTUNE,
    payload: fortunes,
  }
}

export function addFortune({ id, fortune }) {
  return {
    type: ADD_FORTUNE,
    payload: { id, fortune },
  }
}

export function delFortune(deletedFortune) {
  return {
    type: DEL_FORTUNE,
    payload: deletedFortune,
  }
}

export function updateFortune(fortuneToUpdate) {
  return {
    type: UPD_FORTUNE,
    payload: fortuneToUpdate,
  }
}

export const SHOW_LOADING = 'SHOW_LOADING'
export const SHOW_ERROR = 'SHOW_ERROR'

export function showLoading(loadingMessage) {
  return {
    type: SHOW_LOADING,
    payload: loadingMessage,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

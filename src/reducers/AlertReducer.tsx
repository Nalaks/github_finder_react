import { StateAlert } from "../interfaces/types"

const types = {
  setAlert: 'SET_ALERT',
  removeAlert: 'REMOVE_ALERT'
}

export default (state: StateAlert, action: any) => {
  switch (action.type) {
    case types.setAlert: 
      return {
        ...state,
        alert: action.payload
      }
    case types.removeAlert: 
      return {
        ...state,
        alert: null
      }
    default:
      return state
  }
}
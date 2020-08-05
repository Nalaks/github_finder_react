import { State } from "../interfaces/types"

const types = {
  search: 'SEARCH_USERS',
  user: 'GET_USER',
  clear: 'CLEAR_USERS',
  repos: 'GET_REPOS',
  loading: 'SET_LOADING',
}

export default (state: State, action: any) => {
  switch (action.type) {
    case types.search: 
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case types.user:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case types.repos:
      return {
        ...state,
        repos: action.payload
      }
    case types.loading:
      return {
        ...state,
        loading: true
      }
    case types.clear:
      return {
        ...state,
        users: []
      }
    default:
      return state
  }
}
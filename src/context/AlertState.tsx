import React, { useReducer } from 'react'
import AlertContext from './AlertContext'
import AlertReducer from '../reducers/AlertReducer'
import { StateAlert } from '../interfaces/types'


const types = {
  setAlert: 'SET_ALERT',
  removeAlert: 'REMOVE_ALERT'
}

const AlertState = (props: any) => {

  const initialState: StateAlert = {
    alert: null
  }

  const [state, dispatch] = useReducer(AlertReducer, initialState)

	// set alert message
	const setAlert = (msg: string, type: string) => {
		dispatch({ type: types.setAlert, payload: { msg, type } });
		setTimeout(() => {
			dispatch({ type: types.removeAlert });
		}, 5000);
	};

  return <AlertContext.Provider value={{
    alert: state.alert,
    setAlert
  }}>
    {props.children}
  </AlertContext.Provider>
}

export default AlertState
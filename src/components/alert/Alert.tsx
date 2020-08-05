import React, { useContext, Fragment } from 'react'
import AlertContext from '../../context/AlertContext'

const Alert = () => {

  const alertState = useContext(AlertContext)
  const { alert } = alertState
  
  return (
    <Fragment>
      { alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" />{alert.msg}
      </div> )}
    </Fragment>
  )
}

export default Alert

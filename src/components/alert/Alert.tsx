import React from 'react'
import { AlertProps } from '../../interfaces/types'

const Alert: React.FC<AlertProps> = ({ alertState }) => {
  return (
    <div className={`alert alert-${alertState.type}`}>
      <i className="fas fa-info-circle" />{alertState.msg}
    </div>
  )
}

export default Alert

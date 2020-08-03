import React, { Fragment } from 'react'
import Loading from '../../img/spinner.gif'

const Spinner = () => {

  const spinnerStyle = { width: '200px', margin: 'auto', display: 'block'}

  return (
    <Fragment>
      <img src={Loading} alt="Loading Spinner" style={spinnerStyle}/>
    </Fragment>
  )
}

export default Spinner
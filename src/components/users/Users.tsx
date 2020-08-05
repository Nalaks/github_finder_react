import React, { Fragment, useContext } from 'react'
import UserItem  from './UserItem'
import GithubContext from '../../context/GithubContext'
import Spinner from '../spinner/Spinner'

const Users = () => {

  const githubContext = useContext(GithubContext)

  const { loading, users } = githubContext


  const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  }
  
  return (
    <Fragment>
      { loading ? <Spinner /> : null }
      <div style={userStyle}>
        { users.map((user) => <UserItem key={user.id} user={user}/> )}
      </div>
    </Fragment>
  )
}

export default Users
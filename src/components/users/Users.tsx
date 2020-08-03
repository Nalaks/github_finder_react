import React from 'react'
import { UsersProps } from '../../interfaces/types'
import UserItem  from './UserItem'

const Users: React.FC<UsersProps> = ({ users }) => {

  const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  }
  
  return (
    <div style={userStyle}>
      { users.map((user) => <UserItem key={user.id} user={user}/> )}
    </div>
  )
}

export default Users
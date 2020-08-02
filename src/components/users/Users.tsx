import React from 'react'
import { GitProps } from '../../interfaces/types'
import { UserItem } from './UserItem'

export const Users: React.FC<GitProps> = ({ users }) => {

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

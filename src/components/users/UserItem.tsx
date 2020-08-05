import React from 'react'
import { UserItemProps } from '../../interfaces/types'
import { Link } from 'react-router-dom'

const UserItem: React.FC<UserItemProps> = ({ user: { login, avatar_url } }) => {

  return (
    <div className='card text-center'>
      <img src={avatar_url} alt={login} style={{ width: '60px' }} className='round-img' />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
      </div>
    </div>
  )
}

export default UserItem
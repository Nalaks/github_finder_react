import React from 'react'
import { UserProps } from '../../interfaces/types'
import { Link } from 'react-router-dom'


const UserItem: React.FC<UserProps> = ({ user: { id, login, avatar_url, html_url } }) => {

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
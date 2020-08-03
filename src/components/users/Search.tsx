import React, { useState } from 'react'
import { SearchProps } from '../../interfaces/types'

const Search: React.FC<SearchProps> = ({ getUsers, clearUsers, userState, setAlert }) => {
  const [searchUsers, setSearchUsers] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => setSearchUsers(e.currentTarget.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchUsers === '') {
      setAlert('Please enter a search term.', 'light')
    } else {
      getUsers(searchUsers)
      setSearchUsers('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="text" placeholder='Search Users...' onChange={handleSearch} value={searchUsers}/>
        <input type="submit" value="Search" className='btn btn-dark btn-block'/>
      </form>
        { userState.length > 1 ? <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button> : null }
    </div>
  )
}

export default Search

import React, { useState } from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Users from './components/users/Users';
import axios from 'axios'
import { UserProp } from './interfaces/types';
import Spinner from './components/spinner/Spinner';
import Search from './components/users/Search';

export const App = () => {

  const [userState, setUserState] = useState<UserProp[]>([])
  const [loading, setLoading] = useState(false)

  const getUsers = async (search: string) => {
    setLoading(true)
    await axios(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => setUserState(res.data.items))
    setLoading(false)
  }

  const clearUsers = () => setUserState([])

  return (
    <div className='App'>
      <NavBar />
      <div className="container">
        <Search getUsers={getUsers} clearUsers={clearUsers} userState={userState}/>
        { loading ? <Spinner /> : null }
        <Users users={userState} />
      </div>
    </div>
  )
}


export default App;

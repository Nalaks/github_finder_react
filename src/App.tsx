import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBar } from './components/nav-bar/NavBar';
import { Users } from './components/users/Users';
import axios from 'axios'
import { Props } from './interfaces/types';

export const App = () => {

  const [userState, setUserState] = useState<Props[]>([])
  const [loading, setLoading] = useState(false)

  const getUsers = async () => await axios('https://api.github.com/users').then(res => setUserState(res.data))

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='App'>
      <NavBar />
      <div className="container">
        <Users users={userState}/>
      </div>
    </div>
  )
}


export default App;

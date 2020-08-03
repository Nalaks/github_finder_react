import React, { useState } from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Users from './components/users/Users';
import axios from 'axios'
import { UserProp, AlertProp } from './interfaces/types';
import Spinner from './components/spinner/Spinner';
import Search from './components/users/Search';
import Alert from './components/alert/Alert';

export const App = () => {

  const [userState, setUserState] = useState<UserProp[]>([])
  const [loading, setLoading] = useState(false)
  const [alertState, setAlertState] = useState<AlertProp | null>(null)

  const getUsers = async (search: string) => {
    setLoading(true)
    await axios(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => setUserState(res.data.items))
    setLoading(false)
  }

  const clearUsers = () => setUserState([])

  const setAlert = (msg: string, type: string) => {
    setAlertState({msg, type})
    setTimeout(() => {
      setAlertState(null)
    }, 5000);
  }

  return (
    <div className='App'>
      <NavBar />
      <div className="container">
        { alertState !==  null && <Alert alertState={alertState}/>}
        <Search getUsers={getUsers} clearUsers={clearUsers} userState={userState} setAlert={setAlert}/>
        { loading ? <Spinner /> : null }
        <Users users={userState} />
      </div>
    </div>
  )
}


export default App;

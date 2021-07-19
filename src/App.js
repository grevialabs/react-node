import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/User/Users'
import { DisplayBoard } from './components/User/DisplayBoard'
import CreateUser from './components/User/CreateUser'
import { getAllUsers, createUser } from './services/UserService'

function App() {

  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState(0)

  const userCreate = (e) => {

    createUser(user)
      .then(response => {
        console.log(response);
        setNumberOfUsers(numberOfUsers + 1)
      });
  }

  const fetchAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }

  useEffect(() => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }, [])

  const onChangeForm = (e) => {
    if (e.target.name === 'name') {
      user.name = e.target.value;
    } else if (e.target.email === 'email') {
      user.email = e.target.value;
    }
    setUser(user)
  }

  return (
    <div className="App">
      <Header></Header>

      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateUser
              user={user}
              onChangeForm={onChangeForm}
              createUser={userCreate}
            >
            </CreateUser>
          </div>
          <div className="col-md-4">
            <DisplayBoard
              numberOfUsers={numberOfUsers}
              getAllUsers={fetchAllUsers}
            >
            </DisplayBoard>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Users users={users}></Users>
      </div>
    </div>
  );
}

export default App;
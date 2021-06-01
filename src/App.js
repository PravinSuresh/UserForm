import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import Users from './Components/Users';
import UserList from './Components/UserList';
import Header from './Components/Header/index';

function App() {
  let [users,setUsers] = useState([]);
  let [id, setId] = useState(1);
  let [name,setName] = useState("");
  let [phone,setPhone] = useState("");
  const handleSubmit =()=>{
    let newUser = {id:id, name:name, phone:phone};
    let newUsers = [...users];
    newUsers = [...newUsers,newUser];
    setId(id+1);
    setUsers(newUsers);
    setName("");
    setPhone("");
  }
  const getName=(e)=>{
    setName(e.target.value);
  }
  const getPhone=(e)=>{
    setPhone(e.target.value);
  }
  console.log("Name: ",name);
  console.log("Phone: ",phone);
  console.log("Users: ", users);
  return (
    <>
    <Header />
    <div className="App">
      <div className="box1">
        <UserList users={users}/>
      </div>
      <div className="box2"><Users submit={handleSubmit} getname={getName} getphone={getPhone} name={name} phone={phone}/></div>
    </div>
    </>
  );
}

export default App;

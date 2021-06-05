import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Users from './Components/Users';
import UserList from './Components/UserList';
import Header from './Components/Header/index';
import PropTypes, { number } from 'prop-types';

function App() {
  let [users,setUsers] = useState([]);
  let [id, setId] = useState(1);
  let [name,setName] = useState("");
  let [phone,setPhone] = useState("");
  let [error, setError] = useState({nameError:false,phoneError:false});

  const handleSubmit =()=>{
    if(name.length==0&&phone.length==0){
      setError({nameError:true,phoneError:true});
    }else if(name.length==0){
      setError({nameError:true,phoneError:false});
    }else if(phone.length==0){
      setError({nameError:false,phoneError:true});
    }
    else{
      setError({nameError:false,phoneError:false})
      let newUser = {id:id, name:name, phone:phone};
      let newUsers = [...users];
      newUsers = [...newUsers,newUser];
      setId(id+1);
      setUsers(newUsers);
      setName("");
      setPhone("");
    }
  }

  const errorHandler=(field,newval)=>{
    const newError = {...error};
    // console.log("new error: ", newError);
    if(newval.length>0){
      newError[field]=false;
      setError(newError);
    }else{
      newError[field]=true;
      setError(newError);
    }
  }

  const getName=(e)=>{
    setName(e.target.value);
    errorHandler('nameError',e.target.value);
  }
  
  const getPhone=(e)=>{
    setPhone(e.target.value);
    errorHandler('phoneError',e.target.value);
  }
  // console.log("Name: ",name);
  // console.log("Phone: ",phone);
  // console.log("Users: ", users);
  return (
    <>
    <Header />
    <div className="App">
      <div className="box1">
        <UserList users={users}/>
      </div>
      <div className="box2"><Users submit={handleSubmit} getname={getName} getphone={getPhone} name={name} phone={phone} error={error}/></div>
    </div>
    </>
  );
}

export default App;

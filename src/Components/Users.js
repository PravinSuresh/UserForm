import React, { Component } from 'react';

const Users = (props) => {
    return ( 
        <>
            <label>Name: <input autoFocus  type="text" onChange={(e)=>{props.getname(e)}} value={props.name}/></label>
            <label>Phone: <input  type="text" onChange={(e)=>{props.getphone(e)}} value={props.phone} /></label>
            <button onClick={props.submit}>Submit</button>
        </>
     );
}
 
export default Users;
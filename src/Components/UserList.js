import React, { Component } from 'react';

const UserList = ({users}) => {
    const userList = users;
    console.log(userList);
    return ( 
        <>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(u=><tr key={u.id}><td>{u.id}</td><td>{u.name}</td><td>{u.phone}</td></tr>)}                        
                </tbody>
            </table>
        </>
     );
}
 
export default UserList;
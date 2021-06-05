import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Users = (props) => {
    // console.log(props.error);
    const errorStyles={border:'red 2px solid'};
    const cleanStyles={border:'black 1px solid'};
    // style={props.error.phoneError&&{border:"red 1px solid"}}
    // style={props.error.nameError&&{border:"red 1px solid"}} 

    const {id,name,phone} = props;
    return ( 
        <>
            <label>Name: <input autoFocus style={props.error.nameError?errorStyles:cleanStyles}  type="text" onChange={(e)=>{props.getname(e)}} value={props.name}/></label><br/><span style={{fontSize:"9px", fontWeight:"bold"}}>{props.error.nameError?"Name is required":null}</span>
            <label>Phone: <input style={props.error.phoneError?errorStyles:cleanStyles}  type="text" onChange={(e)=>{props.getphone(e)}} value={props.phone} /></label><br/><span style={{fontSize:"9px", fontWeight:"bold"}}>{props.error.phoneError?"Phone number is required":null}</span>
            <br/>
            <button onClick={props.submit}>Submit</button>
        </>
     );
}

Users.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }

export default Users;
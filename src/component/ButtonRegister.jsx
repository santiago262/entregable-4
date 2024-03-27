import React from 'react';

export default function ButtonRegister({ handleShow }) {
  return (
    <nav className='nav'>
      <label htmlFor="logo"><h1>Users</h1></label>
      <ul>
        <li>
          <button className='button-register' type='submit' onClick={handleShow}><img className="svg-icon"src="add-circle-svgrepo-com.svg" alt="" /> Register User</button>
        </li>
      </ul>
      
      </nav>
    
  );
}
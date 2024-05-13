import React, { useState } from 'react';
import DeleteModal from './DeleteModal';

export default function UserCard({ setUserEdit, deleteUser, user, handleShow }) {
  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = () => {
    setShowDelete(true); 
  };

  const handleConfirmDelete = () => {
  
    setShowDelete(false);
    deleteUser("/user/", user.id);
    
  };

  const handleCancelDelete = () => {

    setShowDelete(false); 
  };

  const handleEdit = () => {
    setUserEdit(user);
    handleShow();
  };

  const nameUser = user.first_name + " " + user.last_name;

  return (
    <>
      <div className="card">
        <div className="card-subtitle">
          <div className="card-title">{`${user.first_name} ${user.last_name}`}</div>
          <ul className="user-info">
            <li>
              Email <br />
              <span>{user.email}</span>
            </li>
            <li>
              Birthdate <br />
              <span>{user.birthday}</span>
            </li>
          </ul>
        </div>
        <div className="card-btn">
          <button className="card-btn-delete" onClick={handleDelete}>
            <img src="delete-svgrepo-com.svg" className="svg-icon" alt="" />
          </button>
          <button className="card-edit" onClick={handleEdit}>
            <img src="edit-svgrepo-com.svg" className="svg-icon" alt="" />
          </button>
        </div>
      </div>
      <DeleteModal
        showDelete={showDelete}
        handleConfirmDelete={handleConfirmDelete}
        handleCancelDelete={handleCancelDelete}
        nameUser={nameUser}
      />
    </>
  );
}
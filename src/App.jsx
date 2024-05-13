import React, { useEffect, useState } from 'react';
import './App.css';
import useCurd from './hook/useCurd';
import UserCar from './component/UserCar';
import Modal from './component/Modal';
import ButtonRegister from './component/ButtonRegister';


function App() {
  const BASEURL = "https://entregable-node-js-2.onrender.com/users/v1";
  const [users, getUser, postUser, deleteUser, updateUser] = useCurd(BASEURL);
  const [userEdit, setUserEdit] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getUser("/user/");
  }, []);

  return (
    <>
      <ButtonRegister handleShow={handleShow} />
      <Modal
        show={show}
        handleClose={handleClose}
        setUserEdit={setUserEdit}
        updateUser={updateUser}
        postUser={postUser}
        userEdit={userEdit}
      />
      <div className="card-container">
        {users?.map((user) => (
          <UserCar
            key={user.id}
            user={user}
            setUserEdit={setUserEdit}
            deleteUser={deleteUser}
            handleShow={handleShow}
          />
        ))}
      </div>
    </>
  );
}

export default App;

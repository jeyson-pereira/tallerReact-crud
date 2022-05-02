import React, { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const usersData = [
    { id: uuidv4(), name: "Tania", username: "floppydiskette" },
    { id: uuidv4(), name: "Craig", username: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);

  //Añadir usuario
  const addUser = (user) => {
    user.id = uuidv4();
    console.log(user);
    setUsers([...users, user]);
  };

  //Eliminar usuario
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>CRUD App con Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Añadir usuario</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>Lista de usuarios</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;

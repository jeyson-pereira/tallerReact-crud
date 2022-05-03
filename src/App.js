import React, { useState, useEffect } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import { v4 as uuidv4 } from "uuid";

const KEY = "usersSaved";

const App = () => {
  const localStorageUser = localStorage.getItem(KEY);
  let jsonUsers;

  if (!localStorageUser) {
    localStorage.setItem(KEY, JSON.stringify([]));
    jsonUsers = [];
  } else {
    jsonUsers = JSON.parse(localStorageUser);
  }

  const [users, setUsers] = useState(jsonUsers);
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    user.id = uuidv4();
    console.log(user);
    setUsers([...users, user]);
  };

  //Eliminar usuario
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //Editar usuario
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  //Elementos retornados para ser renderizados
  return (
    <div className="container">
      <h1>CRUD App con Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Editar usuario</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Añadir usuario</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Lista de usuarios</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;

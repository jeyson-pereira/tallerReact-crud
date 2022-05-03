import React, { useState, useEffect } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import { v4 as uuidv4 } from "uuid";

const KEY = "usersSaved";

const App = () => {
  const localStorageUser = localStorage.getItem(KEY);
  let jsonUsers;

  /* Checking if there is a user in local storage, if there is, it will parse it and set it to the
  jsonUsers variable, if there isn't, it will set the jsonUsers variable to an empty array. */
  if (!localStorageUser) {
    localStorage.setItem(KEY, JSON.stringify([]));
    jsonUsers = [];
  } else {
    jsonUsers = JSON.parse(localStorageUser);
  }

  /* Setting the initial state of the users variable to the jsonUsers variable. */
  const [users, setUsers] = useState(jsonUsers);

  /* Saving the users to local storage. */
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(users));
  }, [users]);

  /**
   * The function takes in a user object, adds a unique id to it, and then adds it to the users array
   * @param user - Object with new user;
   */
  const addUser = (user) => {
    user.id = uuidv4();
    console.log(user);
    setUsers([...users, user]);
  };

  /**
   * If the user's id is not equal to the id passed in, return the user.
   * @param id - The id of the user to delete
   */
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  /* Setting the initial state of the app to edit user data */
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  /**
   * When the edit button is clicked, the editRow function is called, which sets the editing state to
   * true, and sets the currentUser state to the user that was clicked on.
   * @param user - the user object that was clicked on
   */
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  /**
   * If the user's id matches the id of the user we want to update, then update the user, otherwise,
   * return the user.
   * @param id - the id of the user to be updated
   * @param updatedUser - The updated user object
   */
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  /* Returning the JSX code that will be rendered in the browser. */
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

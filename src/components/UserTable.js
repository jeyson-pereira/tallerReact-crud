import React from "react";

/* A function that returns a table with users data objects from props */
const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Nombre de usuario</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Editar
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No hay usuarios...</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;

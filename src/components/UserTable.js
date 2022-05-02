import React from "react";

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
              <button className="button muted-button">Editar</button>
              <button className="button muted-button">Eliminar</button>
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

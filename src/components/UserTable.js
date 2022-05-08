import React from "react";

const UserTable = (props) => {
  /**
   * If the user clicks 'OK' on the window.confirm, then the user is deleted.
   * @param user to be deleted
   */
  const confirmDelete = (user) => {
    let userValidation = window.confirm(
      "¿Esta seguro que desea eliminar este usuario?"
    );
    if (userValidation) {
      props.deleteUser(user);
    }
  };

  /* A function that returns a table with users data objects from props */
  return (
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
                  onClick={() => confirmDelete(user.id)}
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
};

export default UserTable;

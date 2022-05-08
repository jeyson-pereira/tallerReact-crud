import React, { useState, useEffect } from "react";

/**
 * It renders a form that allows the user to edit the name and username of a user
 * @param props - The props that are passed to the component.
 */
const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        required
        pattern="[A-Za-zÀ-ÿ0-9@ ]+"
        title="No se permiten simbolos o caracteres especiales diferentes a letras con acento"
        minLength={5}
        maxLength={50}
      />
      <label>Nombre de usuario</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
        required
        pattern="^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$"
        title="No se permiten simbolos, llaves, parentesis y corchetes"
      />
      <input type="submit" value="Actualizar usuario" />
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
    </form>
  );
};

export default EditUserForm;

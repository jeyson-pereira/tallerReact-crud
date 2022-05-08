import React, { useState } from "react";

/**
 * It returns a form with two inputs (name and username) and a button. When the form is submitted, the
 * user object is added to the list of users
 * @param props - The props object is passed to the component.
 */
const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
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
      <input type="submit" value="Nueva lista" />
    </form>
  );
};

export default AddUserForm;

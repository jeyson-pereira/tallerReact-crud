import React, { useState } from "react";
import UserTable from "./components/UserTable";

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);

  return (
    <div className="container">
      <h1>CRUD App con Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Añadir usuario</h2>
        </div>
        <div className="flex-large">
          <h2>Lista de usuarios</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;

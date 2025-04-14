"use client";

import { useState } from "react";
import { LoginDTO } from "../../../interfaces/userInterface";

const LoginUser: React.FC = () => {
  const [formData, SetFormdata] = useState<LoginDTO>({
    usernmame: "",
    password: "",
  });

  const handlerImput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetFormdata({
      ...formData,
      [name]: value,
    });
  };

  const handlerSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(formData.password + formData.usernmame);
  };

  return (
    <div className=" felx flex-colum w-800 bg-amber-600">
      <form onSubmit={handlerSumbit}>
        <label> Username: </label>
        <input
          type="text"
          name="usernmame"
          onChange={handlerImput}
          value={formData.usernmame}
          required
        />
        <label> Username: </label>
        <input
          type="password"
          name="password"
          onChange={handlerImput}
          value={formData.password}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginUser;

"use client";

import { useState } from "react";
import { LoginDTO } from "../../../interfaces/userInterface";
import { loginUserService } from "../../../services/userServices";

const LoginUser: React.FC = () => {
  const [formData, SetFormdata] = useState<LoginDTO>({
    email: "",
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
    console.log(formData);
    loginUserService(formData);
  };

  return (
    <div className=" felx flex-colum w-800 bg-amber-600">
      <form onSubmit={handlerSumbit}>
        <label> Email: </label>
        <input
          type="email"
          name="email"
          onChange={handlerImput}
          value={formData.email}
          required
        />
        <label> Password: </label>
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

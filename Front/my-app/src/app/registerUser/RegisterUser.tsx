"use client";
import { useState } from "react";

const RegisterUser: React.FC = () => {
  const [registerData, SetRegisterData] = useState({
    name: "",
    email: "",
    adress: "",
    phone: "",
    password: "",
  });

  const handlerImput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetRegisterData({
      ...registerData,
      [name]: value,
    });
    console.log(registerData);
  };
  const handlerSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      `name: ${registerData.name} email: ${registerData.email} and  ${registerData.adress} and ${registerData.password}, email: ${registerData.phone}`
    );
  };

  return (
    <div className="w-full flex flex-col aling-center bg-amber-400">
      <form onSubmit={handlerSumbit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={registerData.name}
            onChange={handlerImput}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            value={registerData.phone}
            onChange={handlerImput}
            required
          />
        </div>
        <div>
          <label>Adress</label>
          <input
            type="text"
            name="adress"
            value={registerData.adress}
            onChange={handlerImput}
            required
          />
        </div>
        <div>
          <label> Email </label>
          <input
            type="text"
            name="email"
            value={registerData.email}
            onChange={handlerImput}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handlerImput}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterUser;

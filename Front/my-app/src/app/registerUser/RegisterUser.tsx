"use client";
import { useState } from "react";
import { RegisterDTO } from "../../interfaces/userInterface";
import { registerUserService } from "../../services/userServices";

const RegisterUser: React.FC = () => {
  const [registerData, SetRegisterData] = useState<RegisterDTO>({
    name: "",
    email: "",
    address: "",
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
    registerUserService(registerData);
  };

  return (
    <div className="flex flex-col aling-center bg-amber-400 ">
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
            type="text"
            name="phone"
            value={registerData.phone}
            onChange={handlerImput}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={registerData.address}
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

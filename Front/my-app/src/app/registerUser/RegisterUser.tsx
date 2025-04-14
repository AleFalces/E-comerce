"use client";
import { useState } from "react";
import { RegisterDTO, RegisterErrors } from "../../interfaces/userInterface";
import validateRegisterForm from "@/helpers/ValidationRegisterForm";

const RegisterUser: React.FC = () => {
  const [registerData, SetRegisterData] = useState<RegisterDTO>({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    Cpassword: "",
  });

  const [errors, setErrors] = useState<RegisterErrors>({});

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

    const validationErrors = validateRegisterForm(registerData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // registerUserService(registerData);
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
            className={`border p-2 rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={registerData.phone}
            onChange={handlerImput}
            className={`border p-2 rounded ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone}</p>
          )}
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={registerData.address}
            onChange={handlerImput}
            className={`border p-2 rounded ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.address && (
            <p className="text-red-600 text-sm">{errors.address}</p>
          )}
        </div>
        <div>
          <label> Email </label>
          <input
            type="text"
            name="email"
            value={registerData.email}
            onChange={handlerImput}
            className={`border p-2 rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handlerImput}
            className={`border p-2 rounded ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
          <label>Confirm Password: </label>
          <input
            type="password"
            name="Cpassword"
            onChange={handlerImput}
            value={registerData.Cpassword}
            className={`border p-2 rounded ${
              errors.Cpassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.Cpassword && (
            <p className="text-red-600 text-sm">{errors.Cpassword}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterUser;

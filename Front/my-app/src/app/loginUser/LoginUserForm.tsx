"use client";
//assets
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/Hook/useLogin";

//Dto
import { ILoginDTO, ILoginFormErrorsDto } from "../../interfaces/userInterface";
//componets

import validatelogin from "@/helpers/ValidationsLoginForm";

const LoginUserForm: React.FC = () => {
  const [formData, SetFormdata] = useState<ILoginDTO>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { loginUser } = useLogin();

  const [errors, setErrors] = useState<ILoginFormErrorsDto>({});

  const handlerImput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetFormdata({
      ...formData,
      [name]: value,
    });
  };

  const handlerSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validatelogin(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    loginUser(formData);
    router.push("/");
  };

  return (
    <div className=" felx flex-colum w-800 bg-auto">
      <form onSubmit={handlerSumbit}>
        <label> Email: </label>
        <input
          type="email"
          name="email"
          onChange={handlerImput}
          value={formData.email}
          className={`border p-2 rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        <label> Password: </label>
        <input
          type="password"
          name="password"
          onChange={handlerImput}
          value={formData.password}
          className={`border p-2 rounded ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password}</p>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginUserForm;

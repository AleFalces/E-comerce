"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/Hook/useLogin";
import { ILoginDTO, ILoginFormErrorsDto } from "@/interfaces/userInterface";
import validatelogin from "@/helpers/ValidationsLoginForm";
import toast from "react-hot-toast";
import Link from "next/link";

const LoginUserForm: React.FC = () => {
  const [formData, setFormData] = useState<ILoginDTO>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ILoginFormErrorsDto>({});
  const { loginUser } = useLogin();
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof ILoginFormErrorsDto]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validatelogin(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await toast.promise(loginUser(formData), {
      loading: "Verificando credenciales…",
      success: "¡Bienvenido de vuelta! 👋",
      error: "Credenciales inválidas, inténtalo de nuevo.",
    });
    router.push("/");
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-6 bg-amber-500 shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label className="block mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInput}
          className={`w-full mb-2 p-2 border rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mb-2">{errors.email}</p>
        )}

        <label className="block mb-1" htmlFor="password">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInput}
          className={`w-full mb-2 p-2 border rounded ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.password && (
          <p className="text-red-600 text-sm mb-2">{errors.password}</p>
        )}

        <div>
          <p>
            Don`t have an account?
            <Link href="/registerUser">Sign up</Link>
          </p>
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginUserForm;

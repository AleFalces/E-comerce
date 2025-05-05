"use client";
import { useState } from "react";
import { IRegisterDTO, IRegisterErrors } from "@/interfaces/userInterface";
import validateRegisterForm from "@/helpers/ValidationRegisterForm";
import { registerUserService } from "@/services/userServices";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterUser: React.FC = () => {
  const [registerData, setRegisterData] = useState<IRegisterDTO>({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    Cpassword: "",
  });
  const [errors, setErrors] = useState<IRegisterErrors>({});
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
    if (errors[name as keyof IRegisterErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateRegisterForm(registerData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    await toast.promise(registerUserService(registerData), {
      loading: "Processing registration...",
      success: "¡Successfully registered! ✅",
      error: "Error registering your details😣",
    });
    router.push("/loginUser");
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-yellow-700 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={registerData.name}
            onChange={handleInput}
            className={`w-full p-2 border-2 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-800 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-yellow-700 font-medium mb-1">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={registerData.phone}
            onChange={handleInput}
            className={`w-full p-2 border-2 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-800 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="text-yellow-700 font-medium mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={registerData.address}
            onChange={handleInput}
            className={`w-full p-2 border-2 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-800 ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.address && (
            <p className="text-red-600 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-yellow-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleInput}
            className={`w-full p-2 border-2 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-800 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-yellow-700 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleInput}
            className={`w-full p-2 border-2 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-800 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="Cpassword"
            className="text-yellow-700 font-medium mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="Cpassword"
            value={registerData.Cpassword}
            onChange={handleInput}
            className={`w-full p-2 border-2 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-800 ${
              errors.Cpassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.Cpassword && (
            <p className="text-red-600 text-sm mt-1">{errors.Cpassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-red-800 text-white font-semibold rounded-xl shadow-md hover:bg-red-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;

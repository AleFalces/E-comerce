import { ILoginDTO, ILoginFormErrorsDto } from "@/interfaces/userInterface";

const validatelogin = (state: ILoginDTO) => {
  const errors: ILoginFormErrorsDto = {};

  if (!state.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = "Invalid email format";
  }

  if (!state.password) {
    errors.password = "Password is required";
  } else if (state.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (!/[A-Z]/.test(state.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/[^A-Za-z0-9]/.test(state.password)) {
    errors.password = "Password must contain at least one special character";
  }
  console.log(errors);
  return errors;
};

export default validatelogin;

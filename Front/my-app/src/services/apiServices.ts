import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const apiServices = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiServices.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function handleAxiosError(
  error: unknown,
  contextMessage?: string
): never {
  const err = error as AxiosError;

  if (err.response) {
    console.error(
      `${contextMessage || "Error de servidor"}:`,
      err.response.status
    );
    console.error("Detalles:", err.response.data);
  } else if (err.request) {
    console.error("No se recibió respuesta del servidor.");
  } else {
    console.error("Error al configurar la petición:", err.message);
  }

  throw new Error(contextMessage || "Ocurrió un error con la solicitud");
}

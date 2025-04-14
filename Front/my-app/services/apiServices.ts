import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const apiServices = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
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

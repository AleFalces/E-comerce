import Swal from "sweetalert2";

export const confirmAction = async ({
  title = "¿Estás seguro?",
  text = "Esta acción no se puede deshacer.",
  confirmButtonText = "Sí, continuar",
  cancelButtonText = "Cancelar",
  icon = "warning",
}: {
  title?: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  icon?: "warning" | "info" | "success" | "error" | "question";
}) => {
  const result = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText,
    cancelButtonText,
  });

  return result.isConfirmed;
};

export const showSuccess = (title: string, text = "") => {
  return Swal.fire({
    title,
    text,
    icon: "success",
    confirmButtonText: "OK",
  });
};

export const showError = (title: string, text = "") => {
  return Swal.fire({
    title,
    text,
    icon: "error",
    confirmButtonText: "OK",
  });
};

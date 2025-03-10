import axios, { AxiosError } from "axios";

interface ApiErrorResponse {
  message?: string;
  [key: string]: string | number | boolean | object | undefined;
}

export const handleApiError = (
  error: unknown,
  defaultMessage: string
): void => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;

    const apiError = axiosError.response?.data as ApiErrorResponse | undefined;

    const message = apiError?.message ?? axiosError.message ?? defaultMessage;

    throw new Error(message);
  } else if (error instanceof Error) {
    throw new Error(error.message || defaultMessage);
  } else {
    throw new Error("An unexpected error occurred");
  }
};

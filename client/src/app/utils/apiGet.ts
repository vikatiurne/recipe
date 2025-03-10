import axios, { AxiosResponse } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5001";

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/recipe`,
});

export const apiGet = async <T>(url: string, params?: Record<string, unknown>): Promise<T> => {  
    try {  
      const response: AxiosResponse<T> = await api.get<T>(url, { params });  
      return response.data;  
    } catch (error: unknown) {  
      throw error;  
    }  
   };  
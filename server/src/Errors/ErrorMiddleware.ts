import { NextFunction } from "express";  
import ApiErrors from "../Errors/ApiError"; 

const handleServiceError = (  
    err: unknown,  
    next: NextFunction  
  ) => {  
    if (err instanceof Error) {  
      next(ApiErrors.badRequest(err.message));  
    } else {  
      next(ApiErrors.badRequest("An unknown error occurred"));  
    }  
}; 
  
export default handleServiceError
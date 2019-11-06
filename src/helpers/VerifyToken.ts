import { Router, Request, Response, NextFunction } from 'express';
import { UserService } from './../services/User.service'

export class TokenManager {
    async verify(request: Request, response: Response, next: NextFunction) {
            // var authService = new UserService();
            // var token = request.headers['authorization'];
            // let result: any = await authService.verifyToken(token);
            // if (result.code == 200) {
            //     request.user = result.data;
            //     next();
            // } else {
            //     response.statusCode = result.code;
            //     response.json(result.err);
    
            // }
    }
} 
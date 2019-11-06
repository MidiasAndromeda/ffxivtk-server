import { Router, Request, Response, NextFunction } from 'express';
import { UserService } from '../services/User.service';

export class UserRouter {
    private router: Router = Router();
    private userService: UserService = new UserService();

    getRouter(): Router {
        this.router.get('/', (request: Request, response: Response) => this.userService.getUsers(request, response));
        this.router.get('/:id', (request: Request, response: Response) => this.userService.getUser(request, response));
        this.router.post('/', (request: Request, response: Response) => this.userService.addUser(request, response));
        this.router.put('/:id', (request: Request, response: Response) => this.userService.updateUser(request, response));
        this.router.delete('/:id', (request: Request, response: Response) => this.userService.deleteUser(request, response));

        return this.router;
    }
}

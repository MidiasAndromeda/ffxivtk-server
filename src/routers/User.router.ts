import { Router, Request, Response, NextFunction } from 'express';
import { UserService } from '../services/User.service';

export class UserRouter {
    private router: Router = Router();
    private userService: UserService = new UserService();

    public async verifyToken(request: Request, response: Response, next: NextFunction) {
        // var authService = new AuthenticationService();
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

    getRouter(): Router {
        this.router.get('/', (request: Request, response: Response) => this.userService.getUsers(request, response));
        this.router.get('/:id', (request: Request, response: Response) => this.userService.getUser(request, response));
        this.router.post('/', (request: Request, response: Response) => this.userService.addUser(request, response));
        this.router.put('/:id', (request: Request, response: Response) => this.userService.updateUser(request, response));
        this.router.delete('/:id', (request: Request, response: Response) => this.userService.deleteUser(request, response));

        return this.router;
    }
}

import { Router, Request, Response, NextFunction } from 'express';
import { AuthenticationService } from './../services/Auth.service';
import * as passport from 'passport';

export class AuthenticationRouter {
    private router: Router = Router();

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
        var authService = new AuthenticationService();

        // this.router.post('/signup', async (request: Request, response: Response) => {
        //     let result = await authService.signUpWithUsernameAndPassword(request.body.username, request.body.password);
        //     response.statusCode = result.code;
        //     if (result.err) {
        //         response.json(result.err);
        //     } else {
        //         response.json(result.data);
        //     }
        // });

        this.router.post('/google', async function (request: Request, response: Response) {
            let result: any = await authService.signInWithGoogle(request, response);
            response.statusCode = result.code;
            if (result.err) {
                response.json(result.err);
            } else {
                response.json(result.data);
            }
        });

        this.router.get('/google', passport.authenticate('google', {
            scope: ['profile']
        }));

        this.router.get('/google/redirect', passport.authenticate('google'), (request: Request, response: Response) => {
            console.log('non')
            response.send('you reached a callback');
        });
        return this.router;

    }
}
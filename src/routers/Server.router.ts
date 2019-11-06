import { Router, Request, Response, NextFunction } from 'express';
import { ServerService } from '../services/Server.service';

export class ServerRouter {
    private router: Router = Router();
    private serverService: ServerService = new ServerService();

    getRouter(): Router {
        this.router.get('/', (request: Request, response: Response) => this.serverService.getServers(request, response));
        this.router.get('/:id', (request: Request, response: Response) => this.serverService.getServer(request, response));
        this.router.post('/', (request: Request, response: Response) => this.serverService.addServer(request, response));
        this.router.put('/:id', (request: Request, response: Response) => this.serverService.updateServer(request, response));
        this.router.delete('/:id', (request: Request, response: Response) => this.serverService.deleteServer(request, response));

        return this.router;
    }
}

import { Router, Request, Response, NextFunction } from 'express';
import { StaticService } from '../services/Static.service';

export class StaticRouter {
    private router: Router = Router();
    private staticService: StaticService = new StaticService();

    getRouter(): Router {
        this.router.get('/', (request: Request, response: Response) => this.staticService.getStatics(request, response));
        this.router.get('/:id', (request: Request, response: Response) => this.staticService.getStatic(request, response));
        this.router.post('/', (request: Request, response: Response) => this.staticService.addStatic(request, response));
        this.router.put('/:id', (request: Request, response: Response) => this.staticService.updateStatic(request, response));
        this.router.delete('/:id', (request: Request, response: Response) => this.staticService.deleteStatic(request, response));

        return this.router;
    }
}

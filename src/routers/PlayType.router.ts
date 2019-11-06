import { Router, Request, Response, NextFunction } from 'express';
import { PlayTypeService } from '../services/PlayType.service';

export class playTypeRouter {
    private router: Router = Router();
    private playTypeService: PlayTypeService = new PlayTypeService();

    getRouter(): Router {
        this.router.get('/', (request: Request, response: Response) => this.playTypeService.getPlayTypes(request, response));
        this.router.get('/:id', (request: Request, response: Response) => this.playTypeService.getPlayType(request, response));
        this.router.post('/', (request: Request, response: Response) => this.playTypeService.addPlayType(request, response));
        this.router.put('/:id', (request: Request, response: Response) => this.playTypeService.updatePlayType(request, response));
        this.router.delete('/:id', (request: Request, response: Response) => this.playTypeService.deletePlayType(request, response));

        return this.router;
    }
}

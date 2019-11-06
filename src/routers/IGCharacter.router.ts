import { Router, Request, Response, NextFunction } from 'express';
import { IGCharacterService } from '../services/IGCharacter.service';

export class IGCharacterRouter {
    private router: Router = Router();
    private igCharacterService: IGCharacterService = new IGCharacterService();

    getRouter(): Router {
        this.router.get('/', (request: Request, response: Response) => this.igCharacterService.getIGCharacters(request, response));
        this.router.get('/:id', (request: Request, response: Response) => this.igCharacterService.getIGCharacter(request, response));
        this.router.post('/', (request: Request, response: Response) => this.igCharacterService.addIGCharacter(request, response));
        this.router.put('/:id', (request: Request, response: Response) => this.igCharacterService.updateIGCharacter(request, response));
        this.router.delete('/:id', (request: Request, response: Response) => this.igCharacterService.deleteServer(request, response));

        return this.router;
    }
}
